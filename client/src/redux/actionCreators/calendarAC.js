import { CHANGE_CURRENT_DAY } from '../actionTypes/calendarAT';

export const changeCurrentDay = (payload) => {
  return {
    type: CHANGE_CURRENT_DAY,
    payload,
  }
}
