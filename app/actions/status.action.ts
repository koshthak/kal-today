import { Moment } from 'moment';

import {
  SET_STATUS_TODAY,
  SET_STATUS_CURR_DATE,
  RESET_STATUS_DATES
} from '../constants/actionType';
import { statusDispatchType } from '../reducers/status.reducer';

export const setStatusTodaytDate = (date: Moment) => (
  dispatch: statusDispatchType
) => {
  dispatch({
    type: SET_STATUS_TODAY,
    payload: date
  });
};

export const setStatusCurrtDate = (date: Moment) => (
  dispatch: statusDispatchType
) => {
  dispatch({
    type: SET_STATUS_CURR_DATE,
    payload: date
  });
};

export const resetStatus = () => (dispatch: statusDispatchType) => {
  dispatch({
    type: RESET_STATUS_DATES
  });
};
