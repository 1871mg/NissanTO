import { CHECK_SESSION } from '../actionTypes/userAT';

export const userReducer = (state = { user: false }, action) => {
  switch (action.type) {
    case CHECK_SESSION:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};
