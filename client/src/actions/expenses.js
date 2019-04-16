import axios from 'axios';
 
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
 
const _removeExpense = ({ _id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    _id
});
 
export const removeExpense = ({ _id } = {}) => {
    return (dispatch) => {
        return axios.delete(`/api/expenses/${_id}`).then(() => {
            dispatch(_removeExpense({ _id }));
        })
    }
};
 
const _editExpense = (_id, updates) => ({
    type: 'EDIT_EXPENSE',
    _id,
    updates
});
 
export const editExpense = (_id, updates) => {
    return (dispatch) => {
        return axios.put(`/api/expenses/${_id}`, updates).then(() => {
            dispatch(_editExpense(_id, updates));
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
            //console.log(expenses);
 
            dispatch(_getExpenses(expenses));
        });
    };
};