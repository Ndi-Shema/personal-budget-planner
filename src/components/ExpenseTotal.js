import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext);

  // Calculate total expenses
  const total = expenses.reduce((total, item) => {
    const cost = Number(item.cost) || 0; // Ensure cost is a number
    return total + cost;
  }, 0);

  return (
    <div className='alert alert-primary p-4'>
      <span>Spent so far: £{total.toFixed(2)}</span> {/* Ensures total is formatted */}
    </div>
  );
};

export default ExpenseTotal;
