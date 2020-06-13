import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from '../reducers';
// import { Store, counterStateType } from '../reducers/types';

const rootReducer = createRootReducer();
const enhancer = applyMiddleware(thunk);

function configureStore() {
  return createStore(rootReducer, {}, enhancer);
}

export default configureStore;
