import { call, put, takeEvery } from 'redux-saga/effects'
import { SAGA_GET_SERVICE_INFO} from '../actionTypes/asyncAT/asyncServiseInfoAT'
import {getServiceInfo} from '../actionCreators/serviceInfoAC'


const fetchGetServiceInfo = async () => {
  const response = await fetch('http://localhost:5000/main', {
    method: 'GET',
    credentials: 'include',
  })
  const data = await response.json()
  return data
}

function* getServiceInfoWorcker() {
 const serviceInfo = yield call(fetchGetServiceInfo)
 yield put(getServiceInfo(serviceInfo))
}

export function* serviceInfoWatcher() {
  yield takeEvery(SAGA_GET_SERVICE_INFO , getServiceInfoWorcker)
}
