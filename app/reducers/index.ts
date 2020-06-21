import { combineReducers } from 'redux';

import sidebar, { sidebarStateType } from './sidebar.reducer';
import status, { statusStateType } from './status.reducer';

export type rootStateType = Readonly<{
  sidebar: sidebarStateType;
  status: statusStateType;
}>;

const createRootReducer = () =>
  combineReducers({
    sidebar,
    status
  });

export default createRootReducer;
