import React from 'react';
import moment, { Moment } from 'moment';
import CAL_CONST from '../constants/calendar';

export type TimeArrayType = Array<{
  key: string;
  timeObj: Moment;
  class: string;
  intervals: Array<{
    key: string;
    timeObj: Moment;
    class: string;
  }>;
}>;

export type WeekTimeArrayType = Array<{
  key: string;
  class: string;
  dateObj: Moment;
  timeline: TimeArrayType;
}>;

export const getTimeLine = (interval = 15): TimeArrayType => {
  const timeLine: TimeArrayType = [];
  const start: Moment = moment().startOf('day');

  for (let i = 0; i < CAL_CONST.HOURS_IN_DAY; i += 1) {
    const intervals = [...Array(CAL_CONST.MINS_IN_HOUR / interval).keys()].map(
      (value) => ({
        key: `interval-${value}`,
        class: 'interval',
        timeObj: moment(start)
          .add(i, 'h')
          .add(interval * value, 'm'),
      })
    );

    timeLine[i] = {
      key: `time-${i}`,
      class: 'time',
      timeObj: moment(start).add(i, 'h'),
      intervals: [...intervals],
    };
  }

  return timeLine;
};
export const getWeekTimeLine = (
  dateObj: Moment,
  interval = 15
): WeekTimeArrayType => {
  const singleTimeLine = getTimeLine(interval);
  const weekTimeLimeData = [...Array(CAL_CONST.DAYS_IN_WEEK).keys()].map(
    (value) => ({
      key: `week-day-${value + 1}`,
      dateObj: moment(dateObj).startOf('w').add(value, 'd'),
      class: 'week-day',
      timeline: singleTimeLine,
    })
  );
  return weekTimeLimeData;
};

export const getTimeIndicatorTopPos = (
  today: Moment,
  timelineRef: React.RefObject<HTMLDivElement>,
  intervalsClass: string
): number => {
  const hour = today.hour();
  const min = today.minute();

  // get elements
  const timeElem = timelineRef?.current?.children[hour];
  const timeElemIntervals = timeElem?.getElementsByClassName(intervalsClass);

  // get elements position from top
  const timeElemTopPos = (timeElem as HTMLElement)?.offsetTop;

  // get approx top pos of a interval
  let approxIntervalTopPos = 0;
  if (timeElemIntervals?.length) {
    const approxIntervalIndex = Math.ceil(
      min / (CAL_CONST.MINS_IN_HOUR / timeElemIntervals.length) - 1
    );
    approxIntervalTopPos = (timeElemIntervals[
      approxIntervalIndex
    ] as HTMLElement).offsetTop;
  }

  // scroll active time element into view with offset
  timeElem?.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'nearest',
  });

  // calculate the top postion from the parent element
  const top = timeElemTopPos + approxIntervalTopPos;

  return top;
};
