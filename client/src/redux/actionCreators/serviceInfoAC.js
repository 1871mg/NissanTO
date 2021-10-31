import { GET_SERVICE_INFO, GET_SERVICE_TYPE, SET_MODEL_SELECT, SET_MILEGE_SELECT } from '../actionTypes/serviceInfoAT'

export const getServiceInfo = (payload) => {
  return {
    type: GET_SERVICE_INFO,
    payload,
  }
}

export const getServiceType = (payload) => {
  return {
    type: GET_SERVICE_TYPE,
    payload,
  }
}

export const setModelSelect = (payload) => {
  return {
    type: SET_MODEL_SELECT,
    payload
  }
}

export const setMilegeSelect = (payload) => {
  return {
    type: SET_MILEGE_SELECT,
    payload
  }
}
