import moment, { Moment } from 'moment';
import { Dispatch as ReduxDispatch } from 'redux';

import {
  SET_SIDEBAR_CURRENT_DATE,
  SET_SIDEBAR_ACTIVE_DATE
} from '../constants/actionType';

export type sidebarStateType = Readonly<{
  activeDate: Moment;
  currentDate: Moment;
}>;

export type actionType =
  | { type: typeof SET_SIDEBAR_ACTIVE_DATE; payload: Moment }
  | { type: typeof SET_SIDEBAR_CURRENT_DATE; payload: Moment };

export type sidebarDispatchType = ReduxDispatch<actionType>;

const initialState: sidebarStateType = {
  activeDate: moment(),
  currentDate: moment()
};

const sidebar = (state = initialState, action: actionType) => {
  switch (action.type) {
    case SET_SIDEBAR_CURRENT_DATE:
      return { ...state, activeDate: action.payload };
    case SET_SIDEBAR_ACTIVE_DATE:
      return { ...state, currentDate: action };
    default:
      return state;
  }
};

export default sidebar;
