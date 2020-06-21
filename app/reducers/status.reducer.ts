import moment, { Moment } from 'moment';
import { Dispatch as ReduxDispatch } from 'redux';

import {
  SET_STATUS_TODAY_DATE,
  SET_STATUS_MONTH,
  SET_STATUS_YEAR
} from '../constants/actionType';

export type statusStateType = Readonly<{
  today: Moment;
  month: number;
  year: number;
}>;

export type actionType =
  | { type: typeof SET_STATUS_TODAY_DATE; payload: Moment }
  | { type: typeof SET_STATUS_MONTH; payload: number }
  | { type: typeof SET_STATUS_YEAR; payload: number };

export type statusDispatchType = ReduxDispatch<actionType>;

const initialState: statusStateType = {
  today: moment(),
  month: moment().month(),
  year: moment().year()
};

const status = (state = initialState, action: actionType) => {
  switch (action.type) {
    case SET_STATUS_TODAY_DATE:
      return { ...state, currentDate: action.payload };
    case SET_STATUS_MONTH:
      return { ...state, month: action.payload };
    case SET_STATUS_YEAR:
      return { ...state, yaear: action.payload };
    default:
      return state;
  }
};

export default status;
