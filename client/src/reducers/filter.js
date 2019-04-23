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
                state.year,
                action.year
            ];
        case 'CURRENT_MONTH':
            return [
                state.month,
                action.month
            ];
        case 'CHANGE_YEAR':
            return [
                state.year,
                action.year
            ];
        case 'CHANGE_MONTH':
            return [
                state.month,
                action.month
            ];
        default:
            return state;
    }
};