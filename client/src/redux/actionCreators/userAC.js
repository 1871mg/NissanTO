import { CHECK_SESSION } from '../actionTypes/userAT';

export const checkSessionAC = (payload) => ({
  type: CHECK_SESSION,
  payload,
});
