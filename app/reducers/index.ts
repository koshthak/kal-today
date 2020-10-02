import { combineReducers } from 'redux';
import { persistReducer, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import moment from 'moment';

import sidebar, { SidebarStateType } from './sidebar.reducer';
import status, { StatusStateType } from './status.reducer';
import event, { EventStateType } from './event.reducer';

export type RootStateType = Readonly<{
  sidebar: SidebarStateType;
  status: StatusStateType;
  event: EventStateType;
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
  blacklist: ['sidebar', 'status'],
  debug: true, // to get useful logging
  transforms: [dateTransform],
};

const rootReducer = combineReducers({
  sidebar,
  status,
  event,
});

// TODO: update redux-persist to remove explicit any type
export const persistedReducer = persistReducer(
  persistConfig,
  rootReducer as any
);
