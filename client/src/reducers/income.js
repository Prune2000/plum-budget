const incomesReducerDefaultState = [];
 
export default (state = incomesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_INCOME':
            return [
                ...state,
                action.income
            ];
        case 'REMOVE_INCOME':
            return state.filter(({ _id }) => _id !== action._id);
        case 'EDIT_INCOME':
            return state.map((income) => {
                if (income._id === action._id) {
                    return {
                        ...income,
                        ...action.updates
                    };
                } else {
                    return income;
                }
            });
        case 'GET_INCOMES':
            return action.incomes;
        default:
            return state;
    }
};