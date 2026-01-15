-- Create database (run this manually if needed)
-- CREATE DATABASE personal_finance;

-- Connect to the database and run the following:

-- Create transactions table
CREATE TABLE IF NOT EXISTS transactions (
    id SERIAL PRIMARY KEY,
    type VARCHAR(10) NOT NULL CHECK (type IN ('income', 'expense')),
    amount DECIMAL(10, 2) NOT NULL CHECK (amount > 0),
    category VARCHAR(100) NOT NULL,
    description TEXT,
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index on date for faster queries
CREATE INDEX IF NOT EXISTS idx_transactions_date ON transactions(date DESC);

-- Create index on category for filtering
CREATE INDEX IF NOT EXISTS idx_transactions_category ON transactions(category);

-- Insert some sample data
INSERT INTO transactions (type, amount, category, description, date) VALUES
    ('income', 5000.00, 'Salary', 'Monthly salary', CURRENT_DATE - INTERVAL '5 days'),
    ('expense', 50.00, 'Food', 'Grocery shopping', CURRENT_DATE - INTERVAL '4 days'),
    ('expense', 30.00, 'Transportation', 'Gas', CURRENT_DATE - INTERVAL '3 days'),
    ('expense', 100.00, 'Utilities', 'Electric bill', CURRENT_DATE - INTERVAL '2 days'),
    ('income', 200.00, 'Freelance', 'Project payment', CURRENT_DATE - INTERVAL '1 day');
