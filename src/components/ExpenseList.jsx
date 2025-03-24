import React from 'react';
import { format } from 'date-fns';

export default function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <div className="expense-list">
      {expenses.map(expense => (
        <div key={expense.id} className="expense-item">
          <div>
            <div>{expense.description}</div>
            <small>{format(new Date(expense.date), 'MMM dd, yyyy')}</small>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>${expense.amount.toFixed(2)}</span>
            <button 
              className="delete-btn"
              onClick={() => onDeleteExpense(expense.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
