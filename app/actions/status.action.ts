import { Moment } from 'moment';

import {
  SET_STATUS_TODAY_DATE,
  SET_STATUS_MONTH,
  SET_STATUS_YEAR,
  RESET_STATUS_DATES
} from '../constants/actionType';
import { statusDispatchType } from '../reducers/status.reducer';

export const setStatusTodaytDate = (date: Moment) => (
  dispatch: statusDispatchType
) => {
  dispatch({
    type: SET_STATUS_TODAY_DATE,
    payload: date
  });
};

export const setStatusMonth = (month: number) => (
  dispatch: statusDispatchType
) => {
  dispatch({
    type: SET_STATUS_MONTH,
    payload: month
  });
};

export const setStatusYear = (year: number) => (
  dispatch: statusDispatchType
) => {
  dispatch({
    type: SET_STATUS_YEAR,
    payload: year
  });
};

export const resetStatus = () => (dispatch: statusDispatchType) => {
  dispatch({
    type: RESET_STATUS_DATES
  });
};
