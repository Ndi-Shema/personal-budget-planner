import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [category, setCategory] = useState('Shopping'); // Default category

  const onSubmit = (event) => {
    event.preventDefault();

    const expense = {
      id: uuidv4(),
      name,
      cost: parseFloat(cost),
      category, // Include category
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });

    setName('');
    setCost('');
    setCategory('Shopping');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='row'>
        <div className='col-sm'>
          <div className='form-group'>
            <label for='name'>Name</label>
            <input
              required='required'
              type='text'
              className='form-control'
              id='name'
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>
        <div className='col-sm'>
          <div className='form-group'>
            <label for='cost'>Cost</label>
            <input
              required='required'
              type='number'
              className='form-control'
              id='cost'
              value={cost}
              onChange={(event) => setCost(event.target.value)}
            />
          </div>
        </div>
        <div className='col-sm'>
          <div className='form-group'>
            <label for='category'>Category</label>
            <select
              className='form-control'
              id='category'
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value='Shopping'>Shopping</option>
              <option value='Entertainment'>Entertainment</option>
              <option value='Transport'>Transport</option>
              <option value='Child Care'>Child Care</option>
              {/* Add more categories as needed */}
            </select>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm'>
          <button type='submit' className='btn btn-primary'>
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
