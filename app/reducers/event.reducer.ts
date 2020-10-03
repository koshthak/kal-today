import { Moment } from 'moment';
import { Dispatch as ReduxDispatch } from 'redux';

import { CREATE_NEW_EVENT } from '../constants/actionType';

export type EventType = {
  title: string;
  description: string;
  range: {
    startDate: Moment | Date;
    endDate: Moment | Date;
    key: string;
  };
};

export type EventStateType = Readonly<{
  eventList: Array<EventType>;
}>;

export type EventActionType = {
  type: typeof CREATE_NEW_EVENT;
  payload: EventType;
};

export type EventDispatchType = ReduxDispatch<EventActionType>;

const initialState: EventStateType = {
  eventList: [],
};

const event = (state = initialState, action: EventActionType) => {
  switch (action.type) {
    case CREATE_NEW_EVENT:
      return { ...state, eventList: [...state.eventList, action.payload] };
    default:
      return state;
  }
};

export default event;
