import moment, { Moment } from 'moment';
import { Dispatch as ReduxDispatch } from 'redux';

import {
  SET_STATUS_TODAY,
  SET_STATUS_CURR_DATE,
  RESET_STATUS_DATES
} from '../constants/actionType';

export type statusStateType = Readonly<{
  today: Moment;
  currentDate: Moment;
}>;

export type actionType =
  | { type: typeof SET_STATUS_TODAY; payload: Moment }
  | { type: typeof SET_STATUS_CURR_DATE; payload: Moment }
  | { type: typeof RESET_STATUS_DATES };

export type statusDispatchType = ReduxDispatch<actionType>;

const initialState: statusStateType = {
  today: moment(),
  currentDate: moment()
};

const status = (state = initialState, action: actionType) => {
  switch (action.type) {
    case SET_STATUS_TODAY:
      return { ...state, today: action.payload };
    case SET_STATUS_CURR_DATE:
      return { ...state, currentDate: action.payload };
    case RESET_STATUS_DATES:
      return { ...state, ...initialState };
    default:
      return state;
  }
};

export default status;
