const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const pool = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Get all transactions
app.get('/api/transactions', async (req, res) => {
  try {
    const { category, type, startDate, endDate } = req.query;

    let query = 'SELECT * FROM transactions WHERE 1=1';
    const params = [];
    let paramCount = 1;

    if (category) {
      query += ` AND category = $${paramCount}`;
      params.push(category);
      paramCount++;
    }

    if (type) {
      query += ` AND type = $${paramCount}`;
      params.push(type);
      paramCount++;
    }

    if (startDate) {
      query += ` AND date >= $${paramCount}`;
      params.push(startDate);
      paramCount++;
    }

    if (endDate) {
      query += ` AND date <= $${paramCount}`;
      params.push(endDate);
      paramCount++;
    }

    query += ' ORDER BY date DESC, id DESC';

    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching transactions:', err);
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
});

// Get a single transaction by ID
app.get('/api/transactions/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM transactions WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error fetching transaction:', err);
    res.status(500).json({ error: 'Failed to fetch transaction' });
  }
});

// Create a new transaction
app.post('/api/transactions', async (req, res) => {
  try {
    const { type, amount, category, description, date } = req.body;

    // Validation
    if (!type || !amount || !category) {
      return res.status(400).json({ error: 'Type, amount, and category are required' });
    }

    if (!['income', 'expense'].includes(type)) {
      return res.status(400).json({ error: 'Type must be either "income" or "expense"' });
    }

    if (amount <= 0) {
      return res.status(400).json({ error: 'Amount must be greater than 0' });
    }

    const result = await pool.query(
      'INSERT INTO transactions (type, amount, category, description, date) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [type, amount, category, description || null, date || new Date().toISOString().split('T')[0]]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating transaction:', err);
    res.status(500).json({ error: 'Failed to create transaction' });
  }
});

// Update a transaction
app.put('/api/transactions/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { type, amount, category, description, date } = req.body;

    // Validation
    if (type && !['income', 'expense'].includes(type)) {
      return res.status(400).json({ error: 'Type must be either "income" or "expense"' });
    }

    if (amount && amount <= 0) {
      return res.status(400).json({ error: 'Amount must be greater than 0' });
    }

    const result = await pool.query(
      `UPDATE transactions
       SET type = COALESCE($1, type),
           amount = COALESCE($2, amount),
           category = COALESCE($3, category),
           description = COALESCE($4, description),
           date = COALESCE($5, date),
           updated_at = CURRENT_TIMESTAMP
       WHERE id = $6
       RETURNING *`,
      [type, amount, category, description, date, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error updating transaction:', err);
    res.status(500).json({ error: 'Failed to update transaction' });
  }
});

// Delete a transaction
app.delete('/api/transactions/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM transactions WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    res.json({ message: 'Transaction deleted successfully', transaction: result.rows[0] });
  } catch (err) {
    console.error('Error deleting transaction:', err);
    res.status(500).json({ error: 'Failed to delete transaction' });
  }
});

// Get transaction summary (total income and expenses)
app.get('/api/transactions/summary/stats', async (req, res) => {
  try {
    const { startDate, endDate } = req.query;

    let query = `
      SELECT
        SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END) as total_income,
        SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END) as total_expenses,
        SUM(CASE WHEN type = 'income' THEN amount ELSE -amount END) as balance
      FROM transactions
      WHERE 1=1
    `;

    const params = [];
    let paramCount = 1;

    if (startDate) {
      query += ` AND date >= $${paramCount}`;
      params.push(startDate);
      paramCount++;
    }

    if (endDate) {
      query += ` AND date <= $${paramCount}`;
      params.push(endDate);
      paramCount++;
    }

    const result = await pool.query(query, params);
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error fetching summary:', err);
    res.status(500).json({ error: 'Failed to fetch summary' });
  }
});

// Get transactions by category
app.get('/api/transactions/summary/by-category', async (req, res) => {
  try {
    const { type, startDate, endDate } = req.query;

    let query = `
      SELECT
        category,
        type,
        SUM(amount) as total,
        COUNT(*) as count
      FROM transactions
      WHERE 1=1
    `;

    const params = [];
    let paramCount = 1;

    if (type) {
      query += ` AND type = $${paramCount}`;
      params.push(type);
      paramCount++;
    }

    if (startDate) {
      query += ` AND date >= $${paramCount}`;
      params.push(startDate);
      paramCount++;
    }

    if (endDate) {
      query += ` AND date <= $${paramCount}`;
      params.push(endDate);
      paramCount++;
    }

    query += ' GROUP BY category, type ORDER BY total DESC';

    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching category summary:', err);
    res.status(500).json({ error: 'Failed to fetch category summary' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
