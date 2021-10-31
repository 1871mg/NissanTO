import { SAGA_GET_SERVICE_INFO } from '../../actionTypes/asyncAT/asyncServiseInfoAT'

export const sagaGetServiceInfoAC = () => {
  return {
    type: SAGA_GET_SERVICE_INFO,
  }
}
