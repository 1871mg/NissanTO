import { GET_SERVICE_INFO } from '../actionTypes/serviceInfoAT'

export const getServiceInfo = (payload) => {
  return {
    type: GET_SERVICE_INFO,
    payload,
  }
}
