import { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from './contexts/AuthContext'
import Login from './components/Login'
import UserProfile from './components/UserProfile'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import Summary from './components/Summary'
import './App.css'

const API_URL = import.meta.env.VITE_API_URL || '/api'

function App() {
  const { currentUser } = useAuth()
  const [transactions, setTransactions] = useState([])
  const [summary, setSummary] = useState({ total_income: 0, total_expenses: 0, balance: 0 })
  const [editingTransaction, setEditingTransaction] = useState(null)
  const [filter, setFilter] = useState({ type: '', category: '' })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Show login screen if not authenticated
  if (!currentUser) {
    return <Login />
  }

  // Set up axios interceptor to add auth token
  useEffect(() => {
    const setupAxiosInterceptor = async () => {
      if (currentUser) {
        const token = await currentUser.getIdToken();
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        // Register/update user in backend
        try {
          await axios.post(`${API_URL}/auth/register`);
        } catch (err) {
          console.error('Error registering user:', err);
        }
      }
    };

    setupAxiosInterceptor();
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      fetchTransactions();
      fetchSummary();
    }
  }, [filter, currentUser])

  const fetchTransactions = async () => {
    try {
      setLoading(true)
      setError(null)
      const params = new URLSearchParams()
      if (filter.type) params.append('type', filter.type)
      if (filter.category) params.append('category', filter.category)

      const response = await axios.get(`${API_URL}/transactions?${params}`)
      setTransactions(response.data)
    } catch (err) {
      console.error('Error fetching transactions:', err)
      setError('Failed to fetch transactions. Make sure the backend server is running.')
    } finally {
      setLoading(false)
    }
  }

  const fetchSummary = async () => {
    try {
      const response = await axios.get(`${API_URL}/transactions/summary/stats`)
      setSummary(response.data)
    } catch (err) {
      console.error('Error fetching summary:', err)
    }
  }

  const handleAddTransaction = async (transaction) => {
    try {
      setError(null)
      await axios.post(`${API_URL}/transactions`, transaction)
      fetchTransactions()
      fetchSummary()
    } catch (err) {
      console.error('Error adding transaction:', err)
      setError('Failed to add transaction')
    }
  }

  const handleUpdateTransaction = async (id, transaction) => {
    try {
      setError(null)
      await axios.put(`${API_URL}/transactions/${id}`, transaction)
      setEditingTransaction(null)
      fetchTransactions()
      fetchSummary()
    } catch (err) {
      console.error('Error updating transaction:', err)
      setError('Failed to update transaction')
    }
  }

  const handleDeleteTransaction = async (id) => {
    if (!window.confirm('Are you sure you want to delete this transaction?')) {
      return
    }

    try {
      setError(null)
      await axios.delete(`${API_URL}/transactions/${id}`)
      fetchTransactions()
      fetchSummary()
    } catch (err) {
      console.error('Error deleting transaction:', err)
      setError('Failed to delete transaction')
    }
  }

  const handleEdit = (transaction) => {
    setEditingTransaction(transaction)
  }

  const handleCancelEdit = () => {
    setEditingTransaction(null)
  }

  const categories = [...new Set(transactions.map(t => t.category))]

  return (
    <div className="app">
      <header className="app-header">
        <h1>Personal Finance Tracker</h1>
        <UserProfile />
      </header>

      <main className="app-main">
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <Summary summary={summary} />

        <div className="form-section">
          <h2>{editingTransaction ? 'Edit Transaction' : 'Add New Transaction'}</h2>
          <TransactionForm
            onSubmit={editingTransaction ? handleUpdateTransaction : handleAddTransaction}
            editingTransaction={editingTransaction}
            onCancel={handleCancelEdit}
          />
        </div>

        <div className="filter-section">
          <h2>Filter Transactions</h2>
          <div className="filters">
            <div className="filter-group">
              <label htmlFor="type-filter">Type:</label>
              <select
                id="type-filter"
                value={filter.type}
                onChange={(e) => setFilter({ ...filter, type: e.target.value })}
              >
                <option value="">All</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="category-filter">Category:</label>
              <select
                id="category-filter"
                value={filter.category}
                onChange={(e) => setFilter({ ...filter, category: e.target.value })}
              >
                <option value="">All</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <button
              className="btn btn-secondary"
              onClick={() => setFilter({ type: '', category: '' })}
            >
              Clear Filters
            </button>
          </div>
        </div>

        <div className="transactions-section">
          <h2>Transaction History</h2>
          {loading ? (
            <p>Loading transactions...</p>
          ) : (
            <TransactionList
              transactions={transactions}
              onEdit={handleEdit}
              onDelete={handleDeleteTransaction}
            />
          )}
        </div>
      </main>
    </div>
  )
}

export default App
