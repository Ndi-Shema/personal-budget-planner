import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);

  // Calculate total expenses
  const totalExpenses = expenses.reduce((total, item) => {
    return total + parseFloat(item.cost) || 0; // Ensure cost is treated as a number
  }, 0);

  // Calculate remaining budget
  const remaining = parseFloat(budget) - totalExpenses;

  // Format remaining to 2 decimal places
  const formattedRemaining = remaining.toFixed(2);

  // Check if remaining budget is negative (over budget)
  const alertType = remaining < 0 ? 'alert-danger' : 'alert-success';

  return (
    <div className={`alert ${alertType} p-4`}>
      <span>Remaining: £{formattedRemaining}</span>
    </div>
  );
};

export default Remaining;
