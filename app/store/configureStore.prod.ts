import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from '../reducers';

const rootReducer = createRootReducer();
const enhancer = applyMiddleware(thunk);

function configureStore() {
  return createStore(rootReducer, {}, enhancer);
}

export default configureStore;
