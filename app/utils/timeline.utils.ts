import React from 'react';
import moment, { Moment } from 'moment';
import CAL_CONST from '../constants/calendar';

export type timeArrayType = Array<{
  key: string;
  timeObj: Moment;
  class: string;
  intervals: Array<{
    key: string;
    timeObj: Moment;
    class: string;
  }>;
}>;

export type timeIndicatorPosType = {
  approxIntervalPos: DOMRect | undefined;
  timeElemPos: DOMRect | undefined;
  timelineRefPos: DOMRect | undefined;
  top: number;
};

export const getTimeLine = (interval = 15): timeArrayType => {
  const timeLine: timeArrayType = [];
  const start: Moment = moment().startOf('day');

  for (let i = 0; i < CAL_CONST.HOURS_IN_DAY; i += 1) {
    const intervals = [...Array(CAL_CONST.MINS_IN_HOUR / interval).keys()].map(
      value => {
        return {
          key: `interval-${value}`,
          class: 'interval',
          timeObj: moment(start)
            .add(i, 'h')
            .add(interval * value, 'm')
        };
      }
    );

    timeLine[i] = {
      key: `time-${i}`,
      class: 'time',
      timeObj: moment(start).add(i, 'h'),
      intervals: [...intervals]
    };
  }

  return timeLine;
};

export const getTimeIndicatorPos = (
  today: Moment,
  timelineRef: React.RefObject<HTMLDivElement>,
  intervalsId: string
): timeIndicatorPosType => {
  const hour = today.hour();
  const min = today.minute();

  // get elements
  const timeElem = timelineRef?.current?.children[hour];
  const timeElemIntervals = timeElem?.querySelector(`#${intervalsId}`);

  // get elements positions
  const timelineRefPos = timelineRef?.current?.getBoundingClientRect();
  const timeElemPos = timeElem?.getBoundingClientRect();
  let approxIntervalPos;

  // get approx pos of interval
  const totalTimeElemIntervals = timeElemIntervals?.children?.length;
  if (totalTimeElemIntervals) {
    const approxIntervalIndex =
      Math.ceil(min / (CAL_CONST.MINS_IN_HOUR / totalTimeElemIntervals)) - 1;
    approxIntervalPos = timeElemIntervals?.children[
      approxIntervalIndex
    ].getBoundingClientRect();
  }

  // scroll active time element into view with offset
  timeElem?.scrollIntoView();
  if (timelineRef?.current) {
    // eslint-disable-next-line no-param-reassign
    timelineRef.current.scrollTop -= 100;
  }

  // calculate the top postion from the parent element
  let top = 0;
  const validTop = approxIntervalPos?.top || timeElemPos?.top;
  if (validTop && timelineRefPos?.top) {
    top = validTop - timelineRefPos.top;
  }

  return {
    approxIntervalPos,
    timeElemPos,
    timelineRefPos,
    top
  };
};
