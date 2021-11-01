import { CHECK_SESSION, SET_ERROR_PASS_CONFIRM } from '../actionTypes/userAT';

const initialState = { user: false, isError: null }

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_SESSION:
      return { ...state, user: action.payload };
    case SET_ERROR_PASS_CONFIRM:
      return {...state, isError: action.payload}
    default:
      return state;
  }
};
