import { combineReducers } from 'redux';

import sidebar, { sidebarStateType } from './sidebar.reducer';

export type rootStateType = Readonly<{
  sidebar: sidebarStateType;
}>;

const createRootReducer = () =>
  combineReducers({
    sidebar
  });

export default createRootReducer;
