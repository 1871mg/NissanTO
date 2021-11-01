import { call, put, takeEvery } from 'redux-saga/effects'
import {
  SAGA_CHECK_SESSION,
  SAGA_GET_REGISTRATION,
} from '../actionTypes/asyncAT/asyncUserAT'
import { checkSessionAC, setErrorPassConfirmAC } from '../actionCreators/userAC'

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
  console.log(action.payload);
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
  console.log('worcer', action);
  const { user } = yield call(fetchGetRegistration, action)
  if (user) {
    yield put(checkSessionAC(user))
  } else {
    yield put(setErrorPassConfirmAC(false))
    // setErrorMessage(dataFromServer.message);
  }
}

export function* userWatcher() {
  yield takeEvery(SAGA_CHECK_SESSION, checkSessionWorcker)
  yield takeEvery(SAGA_GET_REGISTRATION, getRegistrationWorcker)
}
