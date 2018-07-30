import {SET_USER} from '../actions';
export default (state, payload) => {
    switch (payload.type) {
        case SET_USER:
            const {user} = payload;
            return {...state, ...{user}};
        default:
            return state;
    }

}