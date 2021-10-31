import { call, put, takeEvery } from 'redux-saga/effects'
import { SAGA_GET_ORDERS } from '../actionTypes/asyncAT/asyncOrdersAT'
import { getOrders } from '../actionCreators/ordersAC'


const fetchGetOrders = async () => {
  const response = await fetch('http://localhost:5000/schedule', {
    method: 'GET',
    credentials: 'include',
  })
  const data = await response.json()
  return data
}

function* getOrdersWorker() {
 const serviceInfo = yield call(fetchGetOrders)
 yield put(getOrders(serviceInfo))
}

export function* ordersWatcher() {
  yield takeEvery(SAGA_GET_ORDERS , getOrdersWorker)
}
