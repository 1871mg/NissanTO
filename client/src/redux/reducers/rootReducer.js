import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { serviceInfoReducer } from './serviceInfoReducer'

export const rootReducer = combineReducers({
  userReducer,
  serviceInfoReducer,
})
