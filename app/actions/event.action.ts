import {
    CREATE_NEW_EVENT
} from '../constants/actionType';
import { EventDispatchType } from '../reducers/event.reducer';

export const createNewEvent = (event: object) => (
    dispatch: EventDispatchType
  ) => {
    dispatch({
      type: CREATE_NEW_EVENT,
      payload: event,
    });
};
