import {
  GET_SERVICE_INFO,
  GET_SERVICE_TYPE,
  SET_MODEL_SELECT,
  SET_MILEGE_SELECT,
  HIDE_TEXT_MAIN,
  SHOW_TEXT_MAIN,
  ADD_ADDITIONAL_SERVICE,
  ADD_ADDITIONAL_COMPONENT,
} from '../actionTypes/serviceInfoAT'

const initialState = {
  mainSelectValue: { carModelId: null, milegeId: null, imgCar: null },
  newOrder: {
    carId: null,
    fullServiceId: null,
    timeStart: null,
    serviceId: [],
    addServiceTotalPrice: 0,
    serviceIdStatus: false,
    componentId: [],
    addComponentTotalPrice: 0,
    orderAdditionsTotalPrice: 0
  },
}

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
      newsetModelState.mainSelectValue.imgCar = newsetModelState.allModels.find(
        (carModel) => carModel.id === action.payload
      ).photoLink
      return { ...newsetModelState }

    case SET_MILEGE_SELECT:
      const newsetMilegeState = { ...state }
      newsetMilegeState.mainSelectValue.milegeId = action.payload
      return { ...newsetMilegeState }

    case GET_SERVICE_TYPE:
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
      newServiceTypeState.newOrder.fullServiceId =
        newServiceTypeState.fullService.id
      newServiceTypeState.newOrder.serviceId = []
      newServiceTypeState.newOrder.componentId = []
      newServiceTypeState.newOrder.addServiceTotalPrice = 0
      newServiceTypeState.newOrder.addComponentTotalPrice = 0
      newServiceTypeState.newOrder.orderAdditionsTotalPrice = 0

      return { ...newServiceTypeState }

    case HIDE_TEXT_MAIN:
      let newHideTextMainState = { ...state }
      newHideTextMainState.mainRecommendation = false
      newHideTextMainState.mainSelectValue.carModelId = null
      newHideTextMainState.mainSelectValue.milegeId = null
      newHideTextMainState.mainSelectValue.imgCar = null
      return { ...newHideTextMainState }

    case SHOW_TEXT_MAIN:
      const newShowTextMainState = { ...state }
      newShowTextMainState.mainRecommendation = true
      return { ...newShowTextMainState }

    case ADD_ADDITIONAL_SERVICE:
      const newAddAdditionalService = { ...state }
      newAddAdditionalService.newOrder.serviceId.push(action.payload)
      newAddAdditionalService.newOrder.serviceIdStatus = true
      newAddAdditionalService.newOrder.serviceId.forEach(
        (el) =>
          (newAddAdditionalService.services =
            newAddAdditionalService.services.filter(
              (service) => service.id !== el.value
            ))
      )
      newAddAdditionalService.newOrder.serviceId.forEach((service) => newAddAdditionalService.newOrder.addServiceTotalPrice += service.price)
      newAddAdditionalService.newOrder.orderAdditionsTotalPrice = newAddAdditionalService.newOrder.addServiceTotalPrice + newAddAdditionalService.newOrder.addComponentTotalPrice

      return { ...newAddAdditionalService }
    case ADD_ADDITIONAL_COMPONENT:
      const newAddAdditionalComponent = { ...state }
      newAddAdditionalComponent.newOrder.componentId.push(action.payload)
      newAddAdditionalComponent.newOrder.componentId.forEach(
        (el) =>
          (newAddAdditionalComponent.components =
            newAddAdditionalComponent.components.filter(
              (component) => component.id !== el.value
            ))
      )
      newAddAdditionalComponent.newOrder.componentId.forEach((component) => newAddAdditionalComponent.newOrder.addComponentTotalPrice += component.price)
      newAddAdditionalComponent.newOrder.orderAdditionsTotalPrice = newAddAdditionalComponent.newOrder.addServiceTotalPrice + newAddAdditionalComponent.newOrder.addComponentTotalPrice


      return { ...newAddAdditionalComponent }

    default:
      return state
  }
}
