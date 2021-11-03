import { call, put, takeEvery } from 'redux-saga/effects'

import { SAGA_CHECK_SESSION_WORKER, SAGA_GET_LOGIN_WORKER, SAGA_GET_LOGOUT_WORKER } from '../actionTypes/asyncAT/asyncWorkerAT'
import { checkSessionWorkerAC, getLogoutWorkerAC } from '../actionCreators/workerAC'

const fetchGetWorkerSession = async () => {
  const response = await fetch('http://localhost:5000/isauth', {
    method: 'GET',
    credentials: 'include',
  })
  const data = await response.json()
  return data
}

const fetchGetLoginWorker = async (action) => {
  const response = await fetch('http://localhost:5000/worker/login', {
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

function* getLoginWorkerWorker(action) {
  const { worker } = yield call(fetchGetLoginWorker, action)
  if (worker) {
    yield put(checkSessionWorkerAC(worker))
  } 
}

function* checkSessionWorkerWorker() {
  const { worker } = yield call(fetchGetWorkerSession)
  yield put(checkSessionWorkerAC(worker))
}

const fetchGetLogoutWorker = async (action) => {
  const response = await fetch('http://localhost:5000/logout', {
    method: 'GET',
    credentials: 'include',
  })

  const dataFromServer = await response.json()
  return dataFromServer
}

function* getLogoutWorkerWorker() {
  const { worker } = yield call(fetchGetLogoutWorker)
  if (!worker) yield put(getLogoutWorkerAC(!worker))
}



export function* workerWatcher() {
  yield takeEvery(SAGA_CHECK_SESSION_WORKER, checkSessionWorkerWorker)
  yield takeEvery(SAGA_GET_LOGIN_WORKER, getLoginWorkerWorker)
  yield takeEvery(SAGA_GET_LOGOUT_WORKER, getLogoutWorkerWorker)
}
