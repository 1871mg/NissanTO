import { GET_SERVICE_INFO, GET_SERVICE_TYPE, SET_MODEL_SELECT, SET_MILEGE_SELECT, HIDE_TEXT_MAIN, SHOW_TEXT_MAIN } from '../actionTypes/serviceInfoAT'

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

export const hideTextMain = () => {
  return {
    type: HIDE_TEXT_MAIN
  }
}

export const showTextMain = () => {
  return {
    type: SHOW_TEXT_MAIN
  }
}
