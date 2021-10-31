import { call, put, takeEvery } from 'redux-saga/effects'
import { SAGA_CHECK_SESSION } from '../actionTypes/asyncAT/asyncUserAT'
import {checkSessionAC} from '../actionCreators/userAC'


const fetchGetUserSession= async () => {
  const response = await fetch('http://localhost:5000/isauth', {
    method: 'GET',
    credentials: 'include',
  })
  const data = await response.json()
  return data
}

function* checkSessionWorcker() {
 const {user} = yield call(fetchGetUserSession)
 if (user)
  yield put(checkSessionAC(user))
}

export function* userWatcher() {
  yield takeEvery(SAGA_CHECK_SESSION , checkSessionWorcker)
}
