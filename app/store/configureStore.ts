import { persistStore, PersistorOptions } from 'redux-persist';

import configureStoreDev from './configureStore.dev';
import configureStoreProd from './configureStore.prod';

const selectedConfigureStore =
  process.env.NODE_ENV === 'production'
    ? configureStoreProd
    : configureStoreDev;

const { store, enhancer } = selectedConfigureStore();

const persistConfig: PersistorOptions = { enhancer };

const persistor = persistStore(store, persistConfig, () => {
  // console.log('Test', store.getState());
});
const configureStore = () => {
  return { persistor, store };
};

export default configureStore;
