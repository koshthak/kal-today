import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistedReducer } from '../reducers';

// const persistedReducer = createpersistedReducer();
const enhancer = applyMiddleware(thunk);

function configureStore() {
  return { store: createStore(persistedReducer, {}, enhancer), enhancer };
}

export default configureStore;
