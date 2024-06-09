import { LOGIN_SUCCESS, LOGOUT } from './actionTypes';

export const loginSuccess = (userId) => ({
    type: LOGIN_SUCCESS,
    payload: userId,
});

export const logout = () => ({
    type: LOGOUT,
});