export const SET_USER = 'SET_USER';

export function setUser(user, history) {
    return (dispatch) => {
        dispatch({
            type: SET_USER,
            user
        });
        history.push('/confirm');
    }
}