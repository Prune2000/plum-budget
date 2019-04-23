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

// MONTH -----------------------------------

const _getCurrentMonth = () => ({
    type: 'CURRENT_MONTH'
});
 
export const getCurrentMonth = () => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let currentMonth = months[date.getMonth() - 1];
    return (dispatch) => {
        dispatch(_getCurrentMonth(currentMonth));
    }
};

const _changeMonth = (month) => ({
    type: 'CHANGE_MONTH',
    month
});
 
export const changeMonth = (month) => {
    return (dispatch) => {
        dispatch(_changeMonth(month));
    }
};