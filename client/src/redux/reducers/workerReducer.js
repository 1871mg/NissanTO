import { CHECK_SESSION_WORKER, GET_LOGOUT_WORKER } from '../actionTypes/workerAT';

const initialState = { isLogout: true, worker: false }

export const workerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_SESSION_WORKER:
      return { ...state, worker: action.payload };
    case GET_LOGOUT_WORKER:
      return {...state, worker: false}
    default:
      return state;
  }
};
