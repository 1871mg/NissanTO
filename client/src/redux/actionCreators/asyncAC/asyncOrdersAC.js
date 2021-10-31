import { SAGA_GET_ORDERS } from "../../actionTypes/asyncAT/asyncOrdersAT";

export const sagaGetOrdersAC = () => {
  return {
    type: SAGA_GET_ORDERS,
  }
}
