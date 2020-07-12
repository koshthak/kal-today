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

export const getTimeLine = (interval = 15): timeArrayType => {
  const timeLine: timeArrayType = [];
  const start: Moment = moment().startOf('day');

  for (let i = 0; i < CAL_CONST.HOURS_IN_DAY; i += 1) {
    const intervals = [...Array(CAL_CONST.MINS_IN_HOUR / interval).keys()].map(
      value => ({
        key: `interval-${value}`,
        class: 'interval',
        timeObj: moment(start)
          .add(i, 'h')
          .add(interval * value, 'm')
      })
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

export const getTimeIndicatorTopPos = (
  today: Moment,
  timelineRef: React.RefObject<HTMLDivElement>,
  intervalsId: string
): number => {
  const hour = today.hour();
  const min = today.minute();

  // get elements
  const timeElem = timelineRef?.current?.children[hour];
  const timeElemIntervals = timeElem?.querySelector(`#${intervalsId}`);

  // get elements position from top
  const timeElemTopPos = (timeElem as HTMLElement)?.offsetTop;

  // get approx top pos of a interval
  let approxIntervalTopPos = 0;
  const totalTimeElemIntervals = timeElemIntervals?.children?.length;
  if (totalTimeElemIntervals) {
    const approxIntervalIndex = Math.ceil(
      min / (CAL_CONST.MINS_IN_HOUR / totalTimeElemIntervals) - 1
    );
    approxIntervalTopPos = (timeElemIntervals?.children[
      approxIntervalIndex
    ] as HTMLElement).offsetTop;
  }

  // scroll active time element into view with offset
  timeElem?.scrollIntoView(true);

  // calculate the top postion from the parent element
  const top = timeElemTopPos + approxIntervalTopPos;

  return top;
};
