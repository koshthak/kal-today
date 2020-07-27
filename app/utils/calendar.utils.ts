import moment, { Moment } from 'moment';
import CAL_CONST from '../constants/calendar';

export type calValueType = {
  date: string;
  monthName: string;
  year: string;
};

export type dateArrayType = Array<{
  key: string;
  dateObj: Moment;
  class: string;
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

export const getDate = (date: number): string =>
  moment()
    .date(date)
    .format('DD');

export const getCalValues = (dateObj: Moment): calValueType => {
  const date = getDate(dateObj.date());
  const monthName = getMonthName(dateObj.month());
  const year = getYear(dateObj.year());

  return { date, monthName, year };
};

export const getWeeklyDate = (dateObj: Moment) => {
  const daysInWeek: any = [];

  // console.log("dataObj", dateObj);

//   var weekStartDate = moment('2013-01-01');
// var weekEndDate = moment('2013-06-01');

  let weekStartDate = moment(dateObj).startOf('week');
  let weekEndDate = moment(dateObj).endOf('week');

  for (let d = moment(weekStartDate); d.diff(weekEndDate, 'days') <= 0; moment(d).add(1, 'days')) {
    // console.log(d.format('YYYY-MM-DD'));
    daysInWeek.push(moment(d).add(1, 'd'));
  };

  return daysInWeek;
}

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
  for (let d = 1; d < CAL_CONST.DAYS_IN_WEEK - lastDayOfMonth; d += 1) {
    totalDays.push({
      key: `next-date-${d}`,
      dateObj: moment(currentMonth).date(d),
      class: 'next-month'
    });
  }

  return totalDays;
};
