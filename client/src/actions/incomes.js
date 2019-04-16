import axios from 'axios';
 
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
 
const _removeIncome = ({ _id } = {}) => ({
    type: 'REMOVE_INCOME',
    _id
});
 
export const removeIncome = ({ _id } = {}) => {
    return (dispatch) => {
        return axios.delete(`/api/incomes/${_id}`).then(() => {
            dispatch(_removeIncome({ _id }));
        })
    }
};
 
const _editIncome = (_id, updates) => ({
    type: 'EDIT_INCOME',
    _id,
    updates
});
 
export const editIncome = (_id, updates) => {
    return (dispatch) => {
        return axios.put(`/api/incomes/${_id}`, updates).then(() => {
            dispatch(_editIncome(_id, updates));
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
            //console.log(incomes);
 
            dispatch(_getIncomes(incomes));
        });
    };
};