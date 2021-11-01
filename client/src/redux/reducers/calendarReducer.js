import { CHANGE_CURRENT_DAY } from '../actionTypes/calendarAT';
import { getDayForInput } from '../../utils/getToday';

const initialState = {
  currentViewName: 'День',
  currentDate: getDayForInput(new Date()),
}

export const calendarReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_CURRENT_DAY:
      return {...state, currentDate: getDayForInput(action.payload) }
    default: return state
  }
}
