import axios from '../axios/axios';
 
const _addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});
 
export const addExpense = (expenseData = {
    type: '',
    description: '',
    price: ''
}) => {
    return (dispatch) => {
        const expense = {
            type: expenseData.type,
            description: expenseData.description,
            price: expenseData.price,
        };
 
        return axios.post('/api/database', expense).then(result => {
            dispatch(_addExpense(result.data));
        });
    };
};
 
const _removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
 
export const removeExpense = ({ id } = {}) => {
    return (dispatch) => {
        return axios.delete(`/api/expenses/${id}`).then(() => {
            dispatch(_removeExpense({ id }));
        })
    }
};
 
const _editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
 
export const editExpense = (id, updates) => {
    return (dispatch) => {
        return axios.put(`/api/expenses/${id}`, updates).then(() => {
            dispatch(_editExpense(id, updates));
        });
    }
};
 
const _getExpenses = (expenses) => ({
    type: 'GET_EXPENSES',
    expenses
});
 
export const getExpenses = () => {
    return (dispatch) => {
        return axios.get('/api/expenses').then(result => {
            const expenses = [];
 
            result.data.forEach(item => {
                expenses.push(item);
            });
 
            dispatch(_getExpenses(expenses));
        });
    };
};