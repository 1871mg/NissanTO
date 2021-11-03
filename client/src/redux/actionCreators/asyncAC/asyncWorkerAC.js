import { SAGA_GET_LOGIN_WORKER, SAGA_CHECK_SESSION_WORKER, SAGA_GET_LOGOUT_WORKER } from "../../actionTypes/asyncAT/asyncWorkerAT"

export const sagaGetLoginWorkerAC = (payload) => {
  return {
    type: SAGA_GET_LOGIN_WORKER,
    payload
  }
}

export const sagaCheckSessionWorkerAC = (payload) => {
  return {
    type: SAGA_CHECK_SESSION_WORKER,
    payload
  }
}

export const sagaGetLogoutWorkerAC = () => {
  return {
    type: SAGA_GET_LOGOUT_WORKER,
  }
}
