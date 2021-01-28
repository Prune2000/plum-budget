let date = new Date();

// YEAR ------------------------------------

const _getCurrentYear = () => ({
    type: 'CURRENT_YEAR'
});
 
export const getCurrentYear = () => {
    const currentYear = date.getFullYear();
    return (dispatch) => {
        dispatch(_getCurrentYear(currentYear));
    }
};

const _changeYear = (year) => ({
    type: 'CHANGE_YEAR',
    year
});
 
export const changeYear = (year) => {
    return (dispatch) => {
        dispatch(_changeYear(year));
    }
};