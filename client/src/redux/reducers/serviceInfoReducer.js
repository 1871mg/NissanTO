import {
  GET_SERVICE_INFO,
  SET_MODEL_SELECT,
  SET_MILEGE_SELECT,
} from '../actionTypes/serviceInfoAT'

const initialState = { mainSelectValue: { carModelId: null, milegeId: null } }

export const serviceInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICE_INFO:
      return {
        ...state,
        allModels: action.payload.allModels,
        allMilege: action.payload.allMilege,
      }
    case SET_MODEL_SELECT:
      console.log('SET_MODEL_SELECT');
      const newsetModelState = {...state}
      newsetModelState.mainSelectValue.carModelId = action.payload
      return { ...newsetModelState }
    case SET_MILEGE_SELECT:
      console.log('SET_MILEGE_SELECT');
      const newsetMilegeState = {...state}
      newsetMilegeState.mainSelectValue.milegeId = action.payload
      return { ...newsetMilegeState }
    default:
      return state

  }
}
