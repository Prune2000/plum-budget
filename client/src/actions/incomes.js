import axios from '../axios/axios';
 
const _addIncome = (income) => ({
    type: 'ADD_INCOME',
    income
});
 
export const addIncome = (incomeData = {
    type: '',
    description: '',
    price: ''
}) => {
    return (dispatch) => {
        const income = {
            type: incomeData.type,
            description: incomeData.description,
            price: incomeData.price,
        };
 
        return axios.post('/api/database', income).then(result => {
            dispatch(_addIncome(result.data));
        });
    };
};
 
const _removeIncome = ({ id } = {}) => ({
    type: 'REMOVE_INCOME',
    id
});
 
export const removeIncome = ({ id } = {}) => {
    return (dispatch) => {
        return axios.delete(`/api/incomes/${id}`).then(() => {
            dispatch(_removeIncome({ id }));
        })
    }
};
 
const _editIncome = (id, updates) => ({
    type: 'EDIT_INCOME',
    id,
    updates
});
 
export const editIncome = (id, updates) => {
    return (dispatch) => {
        return axios.put(`/api/incomes/${id}`, updates).then(() => {
            dispatch(_editIncome(id, updates));
        });
    }
};
 
const _getIncomes = (incomes) => ({
    type: 'GET_INCOMES',
    incomes
});
 
export const getIncomes = () => {
    return (dispatch) => {
        return axios.get('/api/incomes').then(result => {
            const incomes = [];
 
            result.data.forEach(item => {
                incomes.push(item);
            });
 
            dispatch(_getIncomes(incomes));
        });
    };
};