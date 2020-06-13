import { Moment } from 'moment';

import {
  SET_SIDEBAR_CURRENT_DATE,
  SET_SIDEBAR_ACTIVE_DATE
} from '../constants/actionType';
import { sidebarDispatchType } from '../reducers/sidebar.reducer';

export const setSidebaeCurrentDate = (date: Moment) => (
  dispatch: sidebarDispatchType
) => {
  dispatch({
    type: SET_SIDEBAR_CURRENT_DATE,
    payload: date
  });
};

export const setSidebarActiveDate = (date: Moment) => (
  dispatch: sidebarDispatchType
) => {
  dispatch({
    type: SET_SIDEBAR_ACTIVE_DATE,
    payload: date
  });
};
