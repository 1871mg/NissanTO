import { CHECK_SESSION_WORKER, GET_LOGOUT_WORKER } from "../actionTypes/workerAT"

export const checkSessionWorkerAC = (payload) => {
  return {
    type: CHECK_SESSION_WORKER,
    payload,
  }
}

export const getLogoutWorkerAC = () => {
  return {
    type: GET_LOGOUT_WORKER,
  }
}
