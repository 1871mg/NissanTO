import { SAGA_GET_SERVICE_INFO, SAGA_GET_SERVICE_TYPE } from '../../actionTypes/asyncAT/asyncServiseInfoAT'

export const sagaGetServiceInfoAC = () => {
  return {
    type: SAGA_GET_SERVICE_INFO,
  }
}

export const sagaGetServiceTypeAC = (payload) => {
  return {
    type: SAGA_GET_SERVICE_TYPE,
    payload
  }
}
