import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import RemainingBudget from './components/Remaining';
import ExpenseChart from './components/ExpenseChart';
import AddCategoryForm from './components/AddCategoryForm'; // Import the new component

const App = () => {
  return (
    <AppProvider>
      <div className='container'>
        <h1 className='mt-3 text-center'>My Budget Planner</h1>
        <div className='row mt-3'>
          <div className='col-sm'>
            <Budget />
          </div>
          <div className='col-sm'>
            <RemainingBudget />
          </div>
          <div className='col-sm'>
            <ExpenseTotal />
          </div>
        </div>

        <h3 className='mt-3 text-center'>Expenses</h3>
        <div className='row'>
          <div className='col-sm'>
            <ExpenseList />
          </div>
        </div>

        <h3 className='mt-3 text-center'>Add Expense</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <AddExpenseForm />
          </div>
        </div>

        <h3 className='mt-3 text-center'>Add Category</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <AddCategoryForm />
          </div>
        </div>

        <h3 className='mt-3 text-center'>Expense Breakdown</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <ExpenseChart />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
