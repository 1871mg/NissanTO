import { CHECK_SESSION_ADMIN, GET_LOGOUT_ADMIN, GET_LOGIN_ADMIN } from '../actionTypes/adminAT';

const initialState = { admin: false }

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_SESSION_ADMIN:
      return { ...state, admin: action.payload };
    case GET_LOGIN_ADMIN:
      return { ...state, admin: action.payload };
    case GET_LOGOUT_ADMIN:
      return {...state, admin: false}
    default:
      return state;
  }
};
