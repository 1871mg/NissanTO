import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { serviceInfoReducer } from './serviceInfoReducer'
import { ordersReducer } from './ordersReducer'

export const rootReducer = combineReducers({
  userReducer,
  serviceInfoReducer,
  ordersReducer
})
