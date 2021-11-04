import {
  CHECK_SESSION,
  SET_ERROR_PASS_CONFIRM,
  GET_LOGOUT,
  SET_USER_CARS,
  IS_CREATE_NEW_CAR_TRUE,
  IS_CREATE_NEW_CAR_FALSE,
} from '../actionTypes/userAT'

export const checkSessionAC = (payload) => {
  return {
    type: CHECK_SESSION,
    payload,
  }
}

export const setErrorPassConfirmAC = (payload) => {
  return {
    type: SET_ERROR_PASS_CONFIRM,
    payload,
  }
}

export const getLogoutAC = (payload) => {
  return {
    type: GET_LOGOUT,
    payload,
  }
}

export const setUserCarsAC = (payload) => {
  return {
    type: SET_USER_CARS,
    payload,
  }
}



