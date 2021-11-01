import {
  GET_SERVICE_INFO,
  GET_SERVICE_TYPE,
  SET_MODEL_SELECT,
  SET_MILEGE_SELECT,
  HIDE_TEXT_MAIN,
  SHOW_TEXT_MAIN
} from '../actionTypes/serviceInfoAT'

const initialState = { mainSelectValue: { carModelId: null, milegeId: null, imgCar: null } }

export const serviceInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICE_INFO:
      return {
        ...state,
        allModels: action.payload.allModels,
        allMilege: action.payload.allMilege,
      }
    case SET_MODEL_SELECT:
      const newsetModelState = { ...state }
      newsetModelState.mainSelectValue.carModelId = action.payload
      newsetModelState.mainSelectValue.imgCar = newsetModelState.allModels.find((carModel) => carModel.id === action.payload).photoLink
      return { ...newsetModelState }
    case SET_MILEGE_SELECT:
      const newsetMilegeState = { ...state }
      newsetMilegeState.mainSelectValue.milegeId = action.payload
      return { ...newsetMilegeState }
    case GET_SERVICE_TYPE:
      console.log('GET_SERVICE_TYPE:')
      const newServiceTypeState = { ...state }
      newServiceTypeState.fullService = action.payload.fullService[0]
      newServiceTypeState.components = action.payload.components
      newServiceTypeState.services = action.payload.services
      newServiceTypeState.servicesAllPrice = {}
      newServiceTypeState.servicesAllPrice.sumServicesPrice = 0
      newServiceTypeState.fullService.Services.forEach(
        (servicePrice) =>
          (newServiceTypeState.servicesAllPrice.sumServicesPrice +=
            servicePrice.price)
      )
      newServiceTypeState.mainRecommendation = true
      return { ...newServiceTypeState }
    case HIDE_TEXT_MAIN:
      let newHideTextMainState = { ...state }
      newHideTextMainState.mainRecommendation = false
      newHideTextMainState.mainSelectValue.carModelId = null
      newHideTextMainState.mainSelectValue.milegeId  = null
      newHideTextMainState.mainSelectValue.imgCar = null 
      return { ...newHideTextMainState }
    case SHOW_TEXT_MAIN:
      const newShowTextMainState = { ...state }
      newShowTextMainState.mainRecommendation = true
      return { ...newShowTextMainState }
    default:
      return state
  }
}
