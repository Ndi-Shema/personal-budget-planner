import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AddCategoryForm = () => {
  const { dispatch } = useContext(AppContext);
  const [categoryName, setCategoryName] = useState('');
  const [categoryLimit, setCategoryLimit] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    const category = {
      name: categoryName,
      limit: parseFloat(categoryLimit),
    };

    dispatch({
      type: 'ADD_CATEGORY',
      payload: category,
    });

    setCategoryName('');
    setCategoryLimit('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='row'>
        <div className='col-sm'>
          <div className='form-group'>
            <label htmlFor='categoryName'>Category Name</label>
            <input
              required='required'
              type='text'
              className='form-control'
              id='categoryName'
              value={categoryName}
              onChange={(event) => setCategoryName(event.target.value)}
            />
          </div>
        </div>
        <div className='col-sm'>
          <div className='form-group'>
            <label htmlFor='categoryLimit'>Category Limit</label>
            <input
              required='required'
              type='number'
              className='form-control'
              id='categoryLimit'
              value={categoryLimit}
              onChange={(event) => setCategoryLimit(event.target.value)}
            />
          </div>
        </div>
      </div>
      <button type='submit' className='btn btn-primary'>
        Add Category
      </button>
    </form>
  );
};

export default AddCategoryForm;
