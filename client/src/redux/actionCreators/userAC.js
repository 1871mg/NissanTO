import { CHECK_SESSION } from '../actionTypes/user';

export const checkSessionAC = (payload) => ({
  type: CHECK_SESSION,
  payload,
});
