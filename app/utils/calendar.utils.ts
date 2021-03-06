import moment, { Moment } from 'moment';
import CAL_CONST from '../constants/calendar';

export type CalValueType = {
  date: string;
  monthName: string;
  monthShortName: string;
  year: string;
  weekStartDate: string;
  weekEndDate: string;
};

export type DateArrayType = Array<{
  key: string;
  dateObj: Moment;
  class: string;
}>;

export const getWeekShortName = (): Array<string> => moment.weekdaysShort(true);

export const getWeekName = (): Array<string> => moment.weekdays(true);

export const getMonthName = (month: number): string =>
  moment().month(month).format('MMMM');

export const getMonthShortName = (month: number): string =>
  moment().month(month).format('MMM');

export const getYear = (year: number): string =>
  moment().year(year).format('YYYY');

export const getDate = (date: number): string =>
  moment().date(date).format('DD');

export const getDayName = (date: number): string =>
  moment().date(date).format('dddd');

export const getCalValues = (dateObj: Moment): CalValueType => {
  const date = getDate(dateObj.date());
  const monthName = getMonthName(dateObj.month());
  const monthShortName = getMonthShortName(dateObj.month());
  const year = getYear(dateObj.year());
  const weekStartDate = getDate(moment(dateObj).startOf('w').date());
  const weekEndDate = getDate(moment(dateObj).endOf('w').date());

  return { date, monthName, monthShortName, year, weekStartDate, weekEndDate };
};

export const getMonthDates = (year: number, month: number): DateArrayType => {
  const totalDays: DateArrayType = [];

  const currentMonth: Moment = moment().year(year).month(month);

  const firstDayOfMonth: number = currentMonth.startOf('month').weekday();

  const lastDayOfMonth: number = currentMonth.endOf('month').weekday();

  // for previous month dates
  for (let d = firstDayOfMonth - 1; d >= 0; d -= 1) {
    totalDays.push({
      key: `prev-date-${d}`,
      dateObj: moment(currentMonth).date(-d),
      class: 'prev-month',
    });
  }

  // for current month dates
  for (let d = 1; d <= currentMonth.daysInMonth(); d += 1) {
    totalDays.push({
      key: `date-${d}`,
      dateObj: moment(currentMonth).date(d),
      class: 'curr-month',
    });
  }

  // for next month dates
  for (let d = 1; d < CAL_CONST.DAYS_IN_WEEK - lastDayOfMonth; d += 1) {
    totalDays.push({
      key: `next-date-${d}`,
      dateObj: moment(currentMonth).add(1, 'm').date(d),
      class: 'next-month',
    });
  }

  return totalDays;
};
