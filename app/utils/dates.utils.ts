// eslint-disable-next-line for-direction
import moment, { Moment } from 'moment';

export type dateArrayType = Array<{
  key: string;
  dateObj: Moment;
  class: string;
}>;

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

export const getWeekShortName = (): Array<string> => moment.weekdaysShort(true);

export const getWeekName = (): Array<string> => moment.weekdays(true);

export const getMonthName = (month: number): string =>
  moment()
    .month(month)
    .format('MMMM');

export const getYear = (year: number): string =>
  moment()
    .year(year)
    .format('YYYY');

export const getMonthDates = (year: number, month: number): dateArrayType => {
  const totalDays: dateArrayType = [];

  const currentMonth: Moment = moment()
    .year(year)
    .month(month);

  const firstDayOfMonth: number = currentMonth.startOf('month').weekday();

  const lastDayOfMonth: number = currentMonth.endOf('month').weekday();

  // for previous month dates
  for (let d = firstDayOfMonth - 1; d >= 0; d -= 1) {
    totalDays.push({
      key: `prev-date-${d}`,
      dateObj: moment(currentMonth).date(-d),
      class: 'prev-month'
    });
  }

  // for current month dates
  for (let d = 1; d <= currentMonth.daysInMonth(); d += 1) {
    totalDays.push({
      key: `date-${d}`,
      dateObj: moment(currentMonth).date(d),
      class: 'curr-month'
    });
  }

  // for next month dates
  for (let d = 1; d < 7 - lastDayOfMonth; d += 1) {
    totalDays.push({
      key: `next-date-${d}`,
      dateObj: moment(currentMonth).date(d),
      class: 'next-month'
    });
  }

  return totalDays;
};

export const getTimeLine = (interval = 15): timeArrayType => {
  const timeLine: timeArrayType = [];
  const start: Moment = moment().startOf('day');

  for (let i = 0; i < 24; i += 1) {
    const intervals = [...Array(60 / interval).keys()].map(value => {
      return {
        key: `interval-${value}`,
        class: 'interval',
        timeObj: moment(start)
          .add(i, 'h')
          .add(interval * value, 'm')
      };
    });

    timeLine[i] = {
      key: `time-${i}`,
      class: 'time',
      timeObj: moment(start).add(i, 'h'),
      intervals: [...intervals]
    };
  }

  return timeLine;
};
