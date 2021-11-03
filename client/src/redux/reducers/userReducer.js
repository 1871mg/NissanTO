import {
  CHECK_SESSION,
  SET_ERROR_PASS_CONFIRM,
  GET_LOGOUT,
  SET_USER_CARS,
} from '../actionTypes/userAT'

const initialState = {
  user: false,
  isError: null,
  isUserLogout: false,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_SESSION:
      return { ...state, user: action.payload, isUserLogout: false };
    case SET_ERROR_PASS_CONFIRM:
      return { ...state, isError: action.payload }
    case GET_LOGOUT:
      return { ...state, isUserLogout: action.payload, user: false }
    case SET_USER_CARS:
      return {
        ...state,
        user: {
          ...state.user,
          ownerCars: [...state.user.ownerCars, action.payload.ownerCar],
        },
      }
    default:
      return state
  }
}
