function Summary({ summary }) {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount || 0)
  }

  const balanceClass = summary.balance >= 0 ? 'positive' : 'negative'

  return (
    <div className="summary">
      <div className="summary-card income">
        <h3>Total Income</h3>
        <p className="amount">{formatCurrency(summary.total_income)}</p>
      </div>

      <div className="summary-card expense">
        <h3>Total Expenses</h3>
        <p className="amount">{formatCurrency(summary.total_expenses)}</p>
      </div>

      <div className={`summary-card balance ${balanceClass}`}>
        <h3>Balance</h3>
        <p className="amount">{formatCurrency(summary.balance)}</p>
      </div>
    </div>
  )
}

export default Summary
