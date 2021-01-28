// Find the year
let date = new Date();
let year = date.getFullYear();

const filtersReducerDefaultState = [{
    year: year
}];
 
export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'CURRENT_YEAR':
            return [
                ...state,
                {
                    year: action.year
                }
            ];
       
        case 'CHANGE_YEAR':
            return [
                ...state,
                {
                    year: action.year
                }
            ];
        default:
            return state;
    }
};