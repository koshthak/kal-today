import { CREATE_NEW_EVENT } from '../constants/actionType';
import { EventType, EventDispatchType } from '../reducers/event.reducer';

// eslint-disable-next-line import/prefer-default-export
export const createNewEvent = (event: EventType) => (
  dispatch: EventDispatchType
) => {
  dispatch({
    type: CREATE_NEW_EVENT,
    payload: event,
  });
};
