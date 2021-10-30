import { SAGA_CHECK_SESSION } from '../../actionTypes/asyncAT/asyncUserAT'

export const sagaCheckSessionAC = (payload) => {
  return {
    type: SAGA_CHECK_SESSION,
    payload,
  }
}
