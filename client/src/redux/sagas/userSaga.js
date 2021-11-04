import { call, put, takeEvery } from 'redux-saga/effects'
import {
  SAGA_CHECK_SESSION,
  SAGA_GET_REGISTRATION,
  SAGA_GET_LOGIN,
  SAGA_GET_LOGOUT,
  SAGA_CREATE_OWNER_CAR,
} from '../actionTypes/asyncAT/asyncUserAT'
import {
  checkSessionAC,
  setErrorPassConfirmAC,
  getLogoutAC,
  setUserCarsAC,
} from '../actionCreators/userAC'
import { setIsCreateNewCarTrue,
  setIsCreateNewCarFalse, hideTextMain} from '../../redux/actionCreators/serviceInfoAC'
 
import { alertSuccess, alertWarning, alertError } from '../../utils/alerts'

const fetchGetUserSession = async () => {
  const response = await fetch('http://localhost:5000/isauth', {
    method: 'GET',
    credentials: 'include',
  })
  const data = await response.json()
  return data
}

function* checkSessionWorcker() {
  const { user } = yield call(fetchGetUserSession)
  if (user) yield put(checkSessionAC(user))
}

const fetchGetRegistration = async (action) => {
  const response = await fetch('http://localhost:5000/register', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(action.payload),
  })

  const dataFromServer = await response.json()
  return dataFromServer
}

function* getRegistrationWorcker(action) {
  const { user } = yield call(fetchGetRegistration, action)
  if (user) {
    yield put(checkSessionAC(user))
  } else {
    yield put(setErrorPassConfirmAC(false))
    // setErrorMessage(dataFromServer.message);
  }
}

const fetchGetLogin = async (action) => {
  const response = await fetch('http://localhost:5000/login', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(action.payload),
  })

  const dataFromServer = await response.json()
  return dataFromServer
}

function* getLoginWorcker(action) {
  const { user } = yield call(fetchGetLogin, action)
  if (user) {
    yield put(checkSessionAC(user))
  } else {
    yield put(setErrorPassConfirmAC(false))
    // setErrorMessage(dataFromServer.message);
  }
}

const fetchGetLogout = async (action) => {
  const response = await fetch('http://localhost:5000/logout', {
    method: 'GET',
    credentials: 'include',
  })

  const dataFromServer = await response.json()
  return dataFromServer
}

function* getLogoutWorcker() {
  const { isUserLogout } = yield call(fetchGetLogout)
  if (isUserLogout) {
    yield put(getLogoutAC(isUserLogout))
    yield put(hideTextMain())
  }
  //  else {
  //   yield put(setErrorPassConfirmAC(false))
  //   // setErrorMessage(dataFromServer.message);
  // }
}

const fetchCreateOwnerCar = async (action) => {
  console.log('fetch', action.payload)
  const response = await fetch('http://localhost:5000/car', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(action.payload),
  })

  const dataFromServer = await response.json()
  return dataFromServer
}

function* createOwnerCarWorcker(action) {
  const ownerCar = yield call(fetchCreateOwnerCar, action)
  if (ownerCar) {
    yield put(setUserCarsAC(ownerCar))
    yield put(setIsCreateNewCarTrue(true))
    alertSuccess('машина добавлена')
  } else {
    yield put(setIsCreateNewCarFalse(false))
  }
}

export function* userWatcher() {
  yield takeEvery(SAGA_CHECK_SESSION, checkSessionWorcker)
  yield takeEvery(SAGA_GET_REGISTRATION, getRegistrationWorcker)
  yield takeEvery(SAGA_GET_LOGIN, getLoginWorcker)
  yield takeEvery(SAGA_GET_LOGOUT, getLogoutWorcker)
  yield takeEvery(SAGA_CREATE_OWNER_CAR, createOwnerCarWorcker)
}
