import { LOGIN_SUCCESS, LOGOUT } from './actionTypes';

const initialState = {
  userId: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
        return {
            ...state,
            userId: action.payload,
        };
        case LOGOUT:
        return {
            ...state,
            userId: null,
        };
        default:
        return state;
    }
};

export default reducer;