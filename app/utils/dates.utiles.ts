// eslint-disable-next-line for-direction
import moment, { Moment } from 'moment';

export type dateArrayType = Array<{
  key: string;
  dateObj: Moment;
  class: string;
}>;

export const getWeekShortName = (): Array<string> => moment.weekdaysShort(true);

export const getMonthName = (year: number): string =>
  moment()
    .year(year)
    .format('MMMM');

export const getYear = (year: number): string =>
  moment()
    .year(year)
    .format('YYYY');

export const getMonthDates = (year: number, month: number): dateArrayType => {
  const totalDays: dateArrayType = [];

  const currentMonth = moment()
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
