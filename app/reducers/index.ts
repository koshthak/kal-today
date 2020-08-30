import { combineReducers } from 'redux';

import sidebar, { SidebarStateType } from './sidebar.reducer';
import status, { StatusStateType } from './status.reducer';

export type RootStateType = Readonly<{
  sidebar: SidebarStateType;
  status: StatusStateType;
}>;

const createRootReducer = () =>
  combineReducers({
    sidebar,
    status,
  });

export default createRootReducer;
