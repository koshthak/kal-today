import { Moment } from 'moment';

import {
  SET_SIDEBAR_SELECTED_DATE,
  SET_SIDEBAR_ACTIVE_DATE,
} from '../constants/actionType';
import { SidebarDispatchType } from '../reducers/sidebar.reducer';

export const setSidebarSelectedDate = (date: Moment) => (
  dispatch: SidebarDispatchType
) => {
  dispatch({
    type: SET_SIDEBAR_SELECTED_DATE,
    payload: date,
  });
};

export const setSidebarActiveDate = (date: Moment) => (
  dispatch: SidebarDispatchType
) => {
  dispatch({
    type: SET_SIDEBAR_ACTIVE_DATE,
    payload: date,
  });
};
