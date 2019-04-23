// Find the month
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let date = new Date();
let month = months[date.getMonth() - 1];

const filtersReducerDefaultState = [{
    year: date.getFullYear(),
    month: month
}];
 
export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'CURRENT_YEAR':
            return [
                ...state,
                {
                    year: action.year,
                    month: state.month
                }
            ];
        case 'CURRENT_MONTH':
            return [
                ...state,
                {
                    year: state.year,
                    month: action.month
                }
            ];
        case 'CHANGE_YEAR':
            return [
                ...state,
                {
                    year: action.year,
                    month: state.month
                }
            ];
        case 'CHANGE_MONTH':
            return [
                ...state,
                {
                    year: date.getFullYear(),
                    month: action.month
                }
            ];
        default:
            return state;
    }
};