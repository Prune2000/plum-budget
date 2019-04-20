import axios from 'axios';

const _getUser = (user) => ({
    type: 'GET_USER',
    user
});
 
export const getUser = () => {
    return (dispatch) => {
        return axios.get('/dashboard').then(res => {
            const user = {
                userID: res.data._id,
                username: res.data.username
            }
            dispatch(_getUser(user));
        });
    };
};