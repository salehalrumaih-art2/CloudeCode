import { useState, useEffect } from 'react'

function TransactionForm({ onSubmit, editingTransaction, onCancel }) {
  const [formData, setFormData] = useState({
    type: 'expense',
    amount: '',
    category: '',
    description: '',
    date: new Date().toISOString().split('T')[0]
  })

  useEffect(() => {
    if (editingTransaction) {
      setFormData({
        type: editingTransaction.type,
        amount: editingTransaction.amount,
        category: editingTransaction.category,
        description: editingTransaction.description || '',
        date: editingTransaction.date.split('T')[0]
      })
    }
  }, [editingTransaction])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.amount || !formData.category) {
      alert('Please fill in all required fields')
      return
    }

    const transactionData = {
      ...formData,
      amount: parseFloat(formData.amount)
    }

    if (editingTransaction) {
      onSubmit(editingTransaction.id, transactionData)
    } else {
      onSubmit(transactionData)
    }

    setFormData({
      type: 'expense',
      amount: '',
      category: '',
      description: '',
      date: new Date().toISOString().split('T')[0]
    })
  }

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="type">Type *</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount *</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            step="0.01"
            min="0.01"
            required
            placeholder="0.00"
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category *</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            placeholder="e.g., Food, Salary"
            list="category-suggestions"
          />
          <datalist id="category-suggestions">
            <option value="Salary" />
            <option value="Freelance" />
            <option value="Food" />
            <option value="Transportation" />
            <option value="Utilities" />
            <option value="Entertainment" />
            <option value="Shopping" />
            <option value="Healthcare" />
          </datalist>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date *</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Optional description"
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {editingTransaction ? 'Update Transaction' : 'Add Transaction'}
        </button>
        {editingTransaction && (
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  )
}

export default TransactionForm
