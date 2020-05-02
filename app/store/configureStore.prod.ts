import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from '../reducers';
import { Store, counterStateType } from '../reducers/types';

const rootReducer = createRootReducer();
const enhancer = applyMiddleware(thunk);

function configureStore(initialState?: counterStateType): Store {
  return createStore(rootReducer, initialState, enhancer);
}

export default { configureStore };
