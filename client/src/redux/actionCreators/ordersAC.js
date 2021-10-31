import { GET_ORDERS } from '../actionTypes/ordersAT'

export const getOrders = (payload) => {
  return {
    type: GET_ORDERS,
    payload,
  }
}
