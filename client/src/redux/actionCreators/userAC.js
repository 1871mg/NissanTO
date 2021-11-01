import { CHECK_SESSION, SET_ERROR_PASS_CONFIRM } from '../actionTypes/userAT'

export const checkSessionAC = (payload) => {
  return {
    type: CHECK_SESSION,
    payload,
  }
}

export const setErrorPassConfirmAC = (payload) => {
  return {
    type: SET_ERROR_PASS_CONFIRM,
    payload
  }
}
