import { all } from 'redux-saga/effects'
import { userWatcher } from './userSaga'
import { serviceInfoWatcher } from './serviceInfoSaga'
import { ordersWatcher } from './ordersSaga'

export function* rootWatcher() {
  yield all([userWatcher(), serviceInfoWatcher(), ordersWatcher()])
}
