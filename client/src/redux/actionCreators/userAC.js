import { CHECK_SESSION } from '../actionTypes/userAT'

export const checkSessionAC = (payload) => {
  return {
    type: CHECK_SESSION,
    payload,
  }
}
