const { Pool } = require('pg');
require('dotenv').config();

// Support both DATABASE_URL (Render default) and individual connection params
const pool = new Pool(
  process.env.DATABASE_URL
    ? {
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        }
      }
    : {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        database: process.env.DB_NAME || 'personal_finance',
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD,
      }
);

pool.on('connect', () => {
  console.log('Connected to PostgreSQL database');
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

// Auto-initialize database tables
const initDatabase = async () => {
  try {
    console.log('Checking database schema...');

    // Check if transactions table exists
    const checkTable = await pool.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables
        WHERE table_name = 'transactions'
      );
    `);

    if (!checkTable.rows[0].exists) {
      console.log('Initializing database schema...');

      // Create transactions table
      await pool.query(`
        CREATE TABLE transactions (
          id SERIAL PRIMARY KEY,
          type VARCHAR(10) NOT NULL CHECK (type IN ('income', 'expense')),
          amount DECIMAL(10, 2) NOT NULL CHECK (amount > 0),
          category VARCHAR(100) NOT NULL,
          description TEXT,
          date DATE NOT NULL DEFAULT CURRENT_DATE,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);

      // Create indexes
      await pool.query(`
        CREATE INDEX IF NOT EXISTS idx_transactions_date ON transactions(date DESC);
      `);

      await pool.query(`
        CREATE INDEX IF NOT EXISTS idx_transactions_category ON transactions(category);
      `);

      // Insert sample data
      await pool.query(`
        INSERT INTO transactions (type, amount, category, description, date) VALUES
          ('income', 5000.00, 'Salary', 'Monthly salary', CURRENT_DATE - INTERVAL '5 days'),
          ('expense', 50.00, 'Food', 'Grocery shopping', CURRENT_DATE - INTERVAL '4 days'),
          ('expense', 30.00, 'Transportation', 'Gas', CURRENT_DATE - INTERVAL '3 days'),
          ('expense', 100.00, 'Utilities', 'Electric bill', CURRENT_DATE - INTERVAL '2 days'),
          ('income', 200.00, 'Freelance', 'Project payment', CURRENT_DATE - INTERVAL '1 day');
      `);

      console.log('Database schema initialized successfully with sample data!');
    } else {
      console.log('Database schema already exists');
    }
  } catch (err) {
    console.error('Error initializing database:', err);
    // Don't exit - let the app run, admin can fix DB issues
  }
};

// Initialize database when module is loaded
initDatabase();

module.exports = pool;
