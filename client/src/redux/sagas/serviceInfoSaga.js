import { call, put, takeEvery } from 'redux-saga/effects'
import { SAGA_GET_SERVICE_INFO, SAGA_GET_SERVICE_TYPE} from '../actionTypes/asyncAT/asyncServiseInfoAT'
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



function* getServiceTypeWorcker(action) {
  let initialbody = {carModelId: null, milegeId: null}
  let body = {}
  yield action.payload.carModelId ? initialbody.carModelId = action.payload.carModelId : initialbody
  console.log('carModelId', body);
  yield action.payload.milegeId ? initialbody.milegeId = action.payload.milegeId : initialbody
  yield console.log('milegeId',initialbody);

  // const serviceInfo = yield call(fetchGetServiceInfo)
  // yield put(getServiceInfo(serviceInfo))
 }



export function* serviceInfoWatcher() {
  yield takeEvery(SAGA_GET_SERVICE_INFO , getServiceInfoWorcker)
  yield takeEvery(SAGA_GET_SERVICE_TYPE , getServiceTypeWorcker)

}
