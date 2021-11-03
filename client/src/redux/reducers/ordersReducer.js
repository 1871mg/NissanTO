import { GET_ORDERS, ADD_ORDER, GET_FULL_INFO_ORDER, CHANGE_STATUS_ORDER, DELETE_ORDER } from "../actionTypes/ordersAT";

const initialState = {}

export const ordersReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ORDERS:
      return { ...state, orders: action.payload.scheduleData }
    case ADD_ORDER:
      return { ...state, orders: [ ...state.orders, action.payload ] }
    case GET_FULL_INFO_ORDER: 
      return { ...state, fullInfoOrder: action.payload }
    case CHANGE_STATUS_ORDER:
      return { 
        ...state, 
        fullInfoOrder: {
          ...state.fullInfoOrder,
          order: {
            ...state.fullInfoOrder.order,
            isComplite: !state.fullInfoOrder.order.isComplite,
          },
        },
        orders: [...state.orders.map((order) => {
          if(Number(order.id) === Number(action.payload)){
            return { 
              ...order,
              isComplite: !order.isComplite
            }
          } else {
            return order;
          }
        })]
    }
    case DELETE_ORDER:
      return {
        ...state,
        orders: [...state.orders.filter((order) => order.id !== Number(action.payload))]
      }
    default: return state
  }
}
