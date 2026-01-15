# Personal Finance App

A full-stack web application for tracking personal finances, including income and expenses. Built with React, Node.js/Express, and PostgreSQL.

## Features

- Add, edit, and delete financial transactions
- Track income and expenses
- Categorize transactions
- Filter transactions by type and category
- View summary statistics (total income, expenses, and balance)
- Responsive design for mobile and desktop
- Real-time data updates

## Tech Stack

### Frontend
- React 18
- Vite (build tool)
- Axios (HTTP client)
- Modern CSS with responsive design

### Backend
- Node.js
- Express.js
- PostgreSQL
- pg (PostgreSQL client)

## Project Structure

```
personal-finance-app/
├── backend/
│   ├── server.js           # Express server and API routes
│   ├── db.js               # Database configuration
│   ├── init-db.sql         # Database schema and sample data
│   ├── package.json
│   └── .env.example        # Environment variables template
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── TransactionForm.jsx
│   │   │   ├── TransactionList.jsx
│   │   │   └── Summary.jsx
│   │   ├── App.jsx         # Main application component
│   │   ├── App.css         # Application styles
│   │   ├── main.jsx        # React entry point
│   │   └── index.css       # Global styles
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── package.json            # Root package.json with workspaces
└── README.md

```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

### Database Setup

1. Install PostgreSQL if you haven't already

2. Create a new database:
```bash
psql -U postgres
CREATE DATABASE personal_finance;
\q
```

3. Initialize the database schema:
```bash
psql -U postgres -d personal_finance -f backend/init-db.sql
```

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal-finance-app
```

2. Install dependencies for all packages:
```bash
npm install
cd backend && npm install
cd ../frontend && npm install
cd ..
```

3. Configure environment variables:
```bash
cd backend
cp .env.example .env
```

4. Edit `backend/.env` with your PostgreSQL credentials:
```env
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=personal_finance
DB_USER=postgres
DB_PASSWORD=your_password
```

### Running the Application

#### Development Mode

Run both frontend and backend concurrently:
```bash
npm run dev
```

Or run them separately:

Backend (runs on http://localhost:5000):
```bash
npm run dev:backend
```

Frontend (runs on http://localhost:3000):
```bash
npm run dev:frontend
```

#### Production Mode

1. Build the frontend:
```bash
npm run build
```

2. Start the backend:
```bash
npm start
```

## API Endpoints

### Transactions

- `GET /api/transactions` - Get all transactions (supports filtering)
  - Query params: `type`, `category`, `startDate`, `endDate`
- `GET /api/transactions/:id` - Get a single transaction
- `POST /api/transactions` - Create a new transaction
- `PUT /api/transactions/:id` - Update a transaction
- `DELETE /api/transactions/:id` - Delete a transaction

### Summary

- `GET /api/transactions/summary/stats` - Get total income, expenses, and balance
- `GET /api/transactions/summary/by-category` - Get transactions grouped by category

### Health Check

- `GET /api/health` - Server health check

## Usage

### Adding a Transaction

1. Select the transaction type (Income or Expense)
2. Enter the amount
3. Choose or enter a category
4. Select the date
5. Optionally add a description
6. Click "Add Transaction"

### Editing a Transaction

1. Click the edit icon (✏️) next to the transaction
2. Modify the fields as needed
3. Click "Update Transaction"

### Filtering Transactions

Use the filter section to:
- Filter by transaction type (Income/Expense)
- Filter by category
- Clear all filters

### Viewing Summary

The summary cards at the top show:
- Total Income (green)
- Total Expenses (red)
- Current Balance (green if positive, red if negative)

## Database Schema

### Transactions Table

```sql
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
```

## Future Enhancements

Potential features to add:
- User authentication and multiple user support
- Budget management and tracking
- Recurring transactions (subscriptions, bills)
- Reports and data visualization (charts, graphs)
- Export data to CSV/PDF
- Category management (custom categories)
- Monthly/yearly financial reports
- Dark mode theme

## Troubleshooting

### Backend won't start
- Check if PostgreSQL is running
- Verify database credentials in `.env`
- Ensure the database exists and schema is initialized

### Frontend can't connect to backend
- Make sure backend is running on port 5000
- Check the proxy configuration in `frontend/vite.config.js`
- Verify CORS is enabled in the backend

### Database connection errors
- Check PostgreSQL service status
- Verify database name, user, and password
- Ensure PostgreSQL is accepting connections on the specified port

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.