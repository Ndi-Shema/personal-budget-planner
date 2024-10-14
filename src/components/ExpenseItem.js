import React, { useContext, useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
  const [editedName, setEditedName] = useState(props.name);
  const [editedCost, setEditedCost] = useState(props.cost);
  const [editedCategory, setEditedCategory] = useState(props.category); // For category editing

  // Handle delete functionality
  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    });
  };

  // Toggle editing state
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Handle save after editing
  const handleSaveClick = () => {
    dispatch({
      type: 'EDIT_EXPENSE',
      payload: { id: props.id, name: editedName, cost: editedCost, category: editedCategory },
    });
    setIsEditing(false); // Exit edit mode
  };

  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="form-control mb-2"
          />
          <input
            type="number"
            value={editedCost}
            onChange={(e) => setEditedCost(e.target.value)}
            className="form-control mb-2"
          />
          <input
            type="text"
            value={editedCategory}
            onChange={(e) => setEditedCategory(e.target.value)}
            className="form-control"
            placeholder="Category"
          />
        </div>
      ) : (
        <>
          <span>{props.name} ({props.category})</span>
          <div>
            <span className='badge badge-success badge-pill mr-3' style={{ backgroundColor: '#28a745', color: 'white' }}>
              £{props.cost}
            </span>
          </div>
        </>
      )}

      <div>
        {isEditing ? (
          <button className="btn btn-primary btn-sm mr-2" onClick={handleSaveClick}>
            Save
          </button>
        ) : (
          <button className="btn btn-primary btn-sm mr-2" onClick={handleEditClick}>
            Edit
          </button>
        )}
        <TiDelete size="1.5em" onClick={handleDeleteExpense} />
      </div>
    </li>
  );
};

export default ExpenseItem;
