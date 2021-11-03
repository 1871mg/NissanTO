import { CHECK_SESSION_ADMIN, GET_LOGOUT_ADMIN, GET_LOGIN_ADMIN } from "../actionTypes/adminAT"

export const checkSessionAdminAC = (payload) => {
  return {
    type: CHECK_SESSION_ADMIN,
    payload,
  }
}

export const getLoginAdminAC = (payload) => {
  return {
    type: GET_LOGIN_ADMIN,
    payload,
  }
}

export const getLogoutAdminAC = () => {
  return {
    type: GET_LOGOUT_ADMIN,
  }
}

