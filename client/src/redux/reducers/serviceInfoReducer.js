import { GET_SERVICE_INFO } from "../actionTypes/serviceInfoAT"

const initialState = {}

export const serviceInfoReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_SERVICE_INFO:
      console.log('state', action.payload);
      return {...state, allModels: action.payload.allModels, allMilege:action.payload.allMilege}
    default: return state
  }
}
