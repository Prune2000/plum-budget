// Find the month
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let date = new Date();
let month = months[date.getMonth() - 1];

const filtersReducerDefaultState = [{
    month: month
}];
 
export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'CURRENT_MONTH':
            return [
                ...state,
                {
                    month: action.month
                }
            ];
       
        case 'CHANGE_MONTH':
            return [
                ...state,
                {
                    month: action.month
                }
            ];
        default:
            return state;
    }
};