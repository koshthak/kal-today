import { Dispatch as ReduxDispatch } from 'redux';

import {
    CREATE_NEW_EVENT,
} from '../constants/actionType';

export type EventStateType = Readonly<{
  eventList: Array<object>
}>;

export type EventActionType =
  { type: typeof CREATE_NEW_EVENT; payload: object };

export type EventDispatchType = ReduxDispatch<EventActionType>;

const initialState: EventStateType = {
  eventList:[]
};

const event = (state = initialState, action: EventActionType) => {
    switch (action.type) {
      case CREATE_NEW_EVENT:
        return { ...state, 
          eventList: [...state.eventList, action.payload] };
      default:
        return state;
    }
  };
  
  export default event;