import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { serviceInfoReducer } from './serviceInfoReducer'
import { ordersReducer } from './ordersReducer';
import { calendarReducer } from './calendarReducer'

export const rootReducer = combineReducers({
  userReducer,
  serviceInfoReducer,
  ordersReducer,
  calendarReducer
})
