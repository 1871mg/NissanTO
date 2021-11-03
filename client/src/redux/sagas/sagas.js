import { all } from 'redux-saga/effects'
import { userWatcher } from './userSaga'
import { serviceInfoWatcher } from './serviceInfoSaga'
import { ordersWatcher } from './ordersSaga'
import { adminWatcher } from './adminSaga'
import { workerWatcher } from './workerSaga'

export function* rootWatcher() {
  yield all([userWatcher(), serviceInfoWatcher(), ordersWatcher(), adminWatcher(), workerWatcher()])
}
