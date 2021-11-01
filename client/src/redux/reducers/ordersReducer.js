import { GET_ORDERS, ADD_ORDER } from "../actionTypes/ordersAT";

const initialState = {}

export const ordersReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ORDERS:
      return { ...state, orders: action.payload.scheduleData }
    case ADD_ORDER:
      return { ...state, orders: [ ...state.orders, action.payload ] }
    default: return state
  }
}
