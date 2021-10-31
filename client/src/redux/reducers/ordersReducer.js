import { GET_ORDERS } from "../actionTypes/ordersAT";

const initialState = {}

export const ordersReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ORDERS:
      return {...state, orders: action.payload.scheduleData }
    default: return state
  }
}
