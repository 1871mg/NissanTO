import { SAGA_GET_LOGIN_ADMIN, SAGA_CHECK_SESSION_ADMIN, SAGA_GET_LOGOUT_ADMIN } from "../../actionTypes/asyncAT/asyncAdminAT"

export const sagaGetLoginAdminAC = (payload) => {
  return {
    type: SAGA_GET_LOGIN_ADMIN,
    payload
  }
}

export const sagaCheckSessionAdminAC = () => {
  return {
    type: SAGA_CHECK_SESSION_ADMIN,
  }
}

