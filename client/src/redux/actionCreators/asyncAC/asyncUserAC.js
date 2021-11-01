import { SAGA_CHECK_SESSION, SAGA_GET_REGISTRATION } from '../../actionTypes/asyncAT/asyncUserAT'

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
