import { GET_ORDERS, ADD_ORDER, GET_FULL_INFO_ORDER, CHANGE_STATUS_ORDER, DELETE_ORDER } from '../actionTypes/ordersAT'

export const getOrders = (payload) => {
  return {
    type: GET_ORDERS,
    payload,
  }
}

export const getFullInfoOrder = (payload) => {
  return {
    type: GET_FULL_INFO_ORDER,
    payload,
  }
}

export const addOrder = (payload) => {
  return {
    type: ADD_ORDER,
    payload
  }
}

export const changeStatusOrder = (payload) => {
  return {
    type: CHANGE_STATUS_ORDER,
    payload
  }
}

export const deleteOrderAC = (payload) => {
  return {
    type: DELETE_ORDER,
    payload
  }
}
