import { call, put, takeEvery } from 'redux-saga/effects'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SAGA_CHECK_SESSION_ADMIN, SAGA_GET_LOGIN_ADMIN, SAGA_GET_LOGOUT_ADMIN   } from '../actionTypes/asyncAT/asyncAdminAT'
import { checkSessionAdminAC, getLogoutAdminAC, getLoginAdminAC } from '../actionCreators/adminAC'

toast.configure();

const fetchGetLoginAdmin = async (payload) => {
  const response = await fetch('http://localhost:5000/admin/login', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  
  const dataFromServer = await response.json()
  console.log(dataFromServer);
  return dataFromServer
}

function* getLoginAdminWorker(action) {
  const { admin, error } = yield call(fetchGetLoginAdmin, action.payload)
  if (admin) {
    toast.success('🦄 Wow so easy!', {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    yield put(getLoginAdminAC(admin))
  } 
}

const fetchGetAdminSession = async () => {
  console.log('is auth server');
  const response = await fetch('http://localhost:5000/isauth', {
    method: 'GET',
    credentials: 'include',
  })
  const data = await response.json()
  return data
}

function* checkSessionAdminWorker() {

  const { admin } = yield call(fetchGetAdminSession);

  if(admin) yield put(checkSessionAdminAC(admin))

}

const fetchGetLogoutAdmin = async (action) => {
  const response = await fetch('http://localhost:5000/logout', {
    method: 'GET',
    credentials: 'include',
  })

  const dataFromServer = await response.json()
  return dataFromServer
}

function* getLogoutAdminWorker() {
  const { admin } = yield call(fetchGetLogoutAdmin)
  if (!admin) yield put(getLogoutAdminAC(!admin))
}



export function* adminWatcher() {
  yield takeEvery(SAGA_CHECK_SESSION_ADMIN, checkSessionAdminWorker)
  yield takeEvery(SAGA_GET_LOGIN_ADMIN, getLoginAdminWorker)
  yield takeEvery(SAGA_GET_LOGOUT_ADMIN, getLogoutAdminWorker)
}
