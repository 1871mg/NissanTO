import { SAGA_CHECK_SESSION, 
  SAGA_GET_REGISTRATION, 
  SAGA_GET_LOGIN, 
  SAGA_GET_LOGOUT,
 } from '../../actionTypes/asyncAT/asyncUserAT'

export const sagaCheckSessionAC = (payload) => {
  return {
    type: SAGA_CHECK_SESSION,
    payload,
  }
}

export const sagaGetRegistration = (payload) => {
  return {
    type: SAGA_GET_REGISTRATION,
    payload
  }
}

export const sagaGetLoginAC = (payload) => {
  return {
    type: SAGA_GET_LOGIN,
    payload
  }
}

export const sagaGetLogoutAC = () => {
  return {
    type: SAGA_GET_LOGOUT,
  }
}

