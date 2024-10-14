import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {
  const { dispatch, categories } = useContext(AppContext); // Get categories from context

  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [category, setCategory] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    const expense = {
      id: uuidv4(),
      name,
      cost: parseFloat(cost),
      category,
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });

    setName('');
    setCost('');
    setCategory('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='row'>
        <div className='col-sm'>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
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
            <label htmlFor='cost'>Cost</label>
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
            <label htmlFor='category'>Category</label>
            <select
              className='form-control'
              id='category'
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value=''>Select category</option>
              {categories.map((cat) => (
                <option key={cat.name} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <button type='submit' className='btn btn-primary'>
        Save
      </button>
    </form>
  );
};

export default AddExpenseForm;
