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

    // Check if users table exists
    const checkUsersTable = await pool.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables
        WHERE table_name = 'users'
      );
    `);

    if (!checkUsersTable.rows[0].exists) {
      console.log('Creating users table...');

      // Create users table
      await pool.query(`
        CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          firebase_uid VARCHAR(255) UNIQUE NOT NULL,
          email VARCHAR(255) NOT NULL,
          display_name VARCHAR(255),
          photo_url TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);

      // Create index on firebase_uid for faster lookups
      await pool.query(`
        CREATE INDEX IF NOT EXISTS idx_users_firebase_uid ON users(firebase_uid);
      `);

      console.log('Users table created successfully!');
    }

    // Check if transactions table exists
    const checkTransactionsTable = await pool.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables
        WHERE table_name = 'transactions'
      );
    `);

    if (!checkTransactionsTable.rows[0].exists) {
      console.log('Creating transactions table...');

      // Create transactions table with user_id
      await pool.query(`
        CREATE TABLE transactions (
          id SERIAL PRIMARY KEY,
          user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
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
        CREATE INDEX IF NOT EXISTS idx_transactions_user_id ON transactions(user_id);
      `);

      await pool.query(`
        CREATE INDEX IF NOT EXISTS idx_transactions_date ON transactions(date DESC);
      `);

      await pool.query(`
        CREATE INDEX IF NOT EXISTS idx_transactions_category ON transactions(category);
      `);

      console.log('Transactions table created successfully!');
    } else {
      // Migration: Add user_id column if it doesn't exist
      const checkUserIdColumn = await pool.query(`
        SELECT EXISTS (
          SELECT FROM information_schema.columns
          WHERE table_name = 'transactions' AND column_name = 'user_id'
        );
      `);

      if (!checkUserIdColumn.rows[0].exists) {
        console.log('Migrating transactions table to add user_id...');

        await pool.query(`
          ALTER TABLE transactions
          ADD COLUMN user_id INTEGER REFERENCES users(id) ON DELETE CASCADE;
        `);

        await pool.query(`
          CREATE INDEX IF NOT EXISTS idx_transactions_user_id ON transactions(user_id);
        `);

        console.log('Transactions table migrated successfully!');
      }
    }

    console.log('Database schema check completed!');
  } catch (err) {
    console.error('Error initializing database:', err);
    // Don't exit - let the app run, admin can fix DB issues
  }
};

// Initialize database when module is loaded
initDatabase();

module.exports = pool;
