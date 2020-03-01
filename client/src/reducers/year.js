// Find the year
let year = new Date().getFullYear();

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