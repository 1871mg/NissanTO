import { all } from 'redux-saga/effects'
import { userWatcher } from './userSaga'
import { serviceInfoWatcher } from './serviceInfoSaga'

export function* rootWatcher() {
  yield all([userWatcher(), serviceInfoWatcher()])
}
