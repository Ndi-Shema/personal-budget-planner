import React, { createContext, useReducer, useEffect } from 'react';

const initialState = {
    budget: 0,
    expenses: [],
};

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload,
            };
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        case 'EDIT_EXPENSE':
            const updatedExpenses = state.expenses.map((expense) =>
                expense.id === action.payload.id ? { ...expense, ...action.payload } : expense
            );
            return { ...state, expenses: updatedExpenses };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload),
            };
        case 'LOAD_EXPENSES': // Ensure this case is present
            return {
                ...state,
                expenses: action.payload,
            };
        default:
            return state;
    }
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Load data from localStorage
    useEffect(() => {
        const budget = localStorage.getItem('budget');
        const expenses = localStorage.getItem('expenses');

        if (budget) {
            dispatch({ type: 'SET_BUDGET', payload: JSON.parse(budget) });
        }

        if (expenses) {
            dispatch({ type: 'LOAD_EXPENSES', payload: JSON.parse(expenses) });
        }
    }, []);

    // Save budget and expenses to localStorage
    useEffect(() => {
        localStorage.setItem('budget', JSON.stringify(state.budget));
        localStorage.setItem('expenses', JSON.stringify(state.expenses));
    }, [state.budget, state.expenses]);

    return (
        <AppContext.Provider value={{ budget: state.budget, expenses: state.expenses, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};
