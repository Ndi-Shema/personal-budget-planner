import React, { createContext, useReducer } from 'react';

const initialState = {
    expenses: JSON.parse(localStorage.getItem('expenses')) || [],
    budget: parseFloat(localStorage.getItem('budget')) || 2000,
    categories: JSON.parse(localStorage.getItem('categories')) || [
        { name: 'Shopping', limit: 500 },
        { name: 'Entertainment', limit: 300 },
    ],
};

// Reducer function to manage actions
const appReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            const updatedExpenses = [...state.expenses, action.payload];
            localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
            return {
                ...state,
                expenses: updatedExpenses,
            };
        case 'DELETE_EXPENSE':
            const filteredExpenses = state.expenses.filter(
                (expense) => expense.id !== action.payload
            );
            localStorage.setItem('expenses', JSON.stringify(filteredExpenses));
            return {
                ...state,
                expenses: filteredExpenses,
            };
        case 'EDIT_EXPENSE':
            const editedExpenses = state.expenses.map((expense) =>
                expense.id === action.payload.id ? action.payload : expense
            );
            localStorage.setItem('expenses', JSON.stringify(editedExpenses));
            return {
                ...state,
                expenses: editedExpenses,
            };
        case 'ADD_CATEGORY':
            const updatedCategories = [...state.categories, action.payload];
            localStorage.setItem('categories', JSON.stringify(updatedCategories));
            return {
                ...state,
                categories: updatedCategories,
            };
        default:
            return state;
    }
};

// Create Context
export const AppContext = createContext();

// App Provider component to pass down state and dispatcher
export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <AppContext.Provider
            value={{
                expenses: state.expenses,
                budget: state.budget,
                categories: state.categories, // Pass categories into context
                dispatch,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
