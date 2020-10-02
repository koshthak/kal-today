import { CREATE_NEW_EVENT } from '../constants/actionType';
import { EventDispatchType } from '../reducers/event.reducer';

// eslint-disable-next-line import/prefer-default-export
export const createNewEvent = (event: Record<string, unknown>) => (
  dispatch: EventDispatchType
) => {
  console.log('dispatch me ', event);
  dispatch({
    type: CREATE_NEW_EVENT,
    payload: event,
  });
};
