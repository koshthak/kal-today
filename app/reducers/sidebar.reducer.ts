import moment, { Moment } from 'moment';
import { Dispatch as ReduxDispatch } from 'redux';

import {
  SET_SIDEBAR_SELECTED_DATE,
  SET_SIDEBAR_ACTIVE_DATE,
} from '../constants/actionType';

export type SidebarStateType = Readonly<{
  activeDate: Moment;
  selectedDate: Moment;
}>;

export type SidebarActionType =
  | { type: typeof SET_SIDEBAR_ACTIVE_DATE; payload: Moment }
  | { type: typeof SET_SIDEBAR_SELECTED_DATE; payload: Moment };

export type SidebarDispatchType = ReduxDispatch<SidebarActionType>;

const initialState: SidebarStateType = {
  activeDate: moment(),
  selectedDate: moment(),
};

const sidebar = (state = initialState, action: SidebarActionType) => {
  switch (action.type) {
    case SET_SIDEBAR_SELECTED_DATE:
      return { ...state, selectedDate: action.payload };
    case SET_SIDEBAR_ACTIVE_DATE:
      return { ...state, activeDate: action.payload };
    default:
      return state;
  }
};

export default sidebar;
