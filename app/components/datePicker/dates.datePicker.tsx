import React, { Fragment, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

import {
  DateArrayType,
  getMonthDates,
  getWeekShortName,
} from '../../utils/calendar.utils';

import styles from './datepicker.scss';
import DatePickerHeader from './header.datepicker';

const DatePickerDates = () => {
  const { t } = useTranslation();

  useEffect(() => {}, [t]);

  const [date, setDate] = useState(moment());

  const year = date.year();
  const month = date.month();

  const days: DateArrayType = getMonthDates(year, month);
  const weekNames: Array<string> = getWeekShortName();

  return (
    <div className={styles['dates-container']}>
      <DatePickerHeader date={date} setDate={setDate} />
      <div className="row">
        {weekNames.map((d) => (
          <div key={d} className={`text-center col ${styles.weekday}`}>
            {d}
          </div>
        ))}
        {days.map((e, i) => (
          <Fragment key={e.key}>
            {i % 7 === 0 && <div className="w-100" />}
            <div
              className={`col text-center ${
                e.dateObj.isSame(moment(), 'day') ? styles.today : ''
              }  ${
                e.dateObj.isBefore(moment(), 'day')
                  ? styles['non-selectable']
                  : styles[e.class]
              }`}
            >
              {e.dateObj.format('D')}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default DatePickerDates;
