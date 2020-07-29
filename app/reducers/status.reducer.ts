import moment, { Moment } from 'moment';
import { Dispatch as ReduxDispatch } from 'redux';

import {
  SET_STATUS_TODAY,
  SET_STATUS_ACTIVE_DATE,
  SET_STATUS_SELECTED_DATE,
  RESET_STATUS_DATES,
} from '../constants/actionType';

export type StatusStateType = Readonly<{
  today: Moment;
  activeDate: Moment;
  selectedDate: Moment;
}>;

export type StatusActionType =
  | { type: typeof SET_STATUS_TODAY; payload: Moment }
  | { type: typeof SET_STATUS_ACTIVE_DATE; payload: Moment }
  | { type: typeof SET_STATUS_SELECTED_DATE; payload: Moment }
  | { type: typeof RESET_STATUS_DATES };

export type StatusDispatchType = ReduxDispatch<StatusActionType>;

const initialState: StatusStateType = {
  today: moment(),
  activeDate: moment(),
  selectedDate: moment(),
};

const status = (state = initialState, action: StatusActionType) => {
  switch (action.type) {
    case SET_STATUS_TODAY:
      return { ...state, today: action.payload };
    case SET_STATUS_ACTIVE_DATE:
      return { ...state, activeDate: action.payload };
    case SET_STATUS_SELECTED_DATE:
      return { ...state, selectedDate: action.payload };
    case RESET_STATUS_DATES:
      return { ...state, ...initialState };
    default:
      return state;
  }
};

export default status;
