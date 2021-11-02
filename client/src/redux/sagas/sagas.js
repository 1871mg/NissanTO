import { all } from 'redux-saga/effects'
import { userWatcher } from './userSaga'
import { serviceInfoWatcher } from './serviceInfoSaga'
import { ordersWatcher } from './ordersSaga'
import { adminWatcher } from './adminSaga'

export function* rootWatcher() {
  yield all([userWatcher(), serviceInfoWatcher(), ordersWatcher(), adminWatcher()])
}
