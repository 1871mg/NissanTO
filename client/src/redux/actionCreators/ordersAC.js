import { GET_ORDERS, ADD_ORDER } from '../actionTypes/ordersAT'

export const getOrders = (payload) => {
  return {
    type: GET_ORDERS,
    payload,
  }
}

export const addOrder = (payload) => {
  return {
    type: ADD_ORDER,
    payload
  }
}
