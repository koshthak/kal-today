import { combineReducers } from 'redux';
import counter from './counter';

export default function createRootReducer() {
  return combineReducers({
    counter
  });
}
