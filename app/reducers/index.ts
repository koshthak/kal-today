import { combineReducers } from 'redux';
import { persistReducer, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import moment from 'moment';

import sidebar, { SidebarStateType } from './sidebar.reducer';
import status, { StatusStateType } from './status.reducer';

export type RootStateType = Readonly<{
  sidebar: SidebarStateType;
  status: StatusStateType;
}>;

const dateTransform = createTransform(JSON.stringify, (toRehydrate) =>
  JSON.parse(toRehydrate, (key, value) =>
    typeof value === 'string' &&
    value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)
      ? moment(value)
      : value
  )
);

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['nav', 'status'],
  debug: true, // to get useful logging
  transforms: [dateTransform],
};

const rootReducer = combineReducers({
  sidebar,
  status,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
