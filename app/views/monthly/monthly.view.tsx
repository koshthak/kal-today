import React, { Fragment, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

import {
  dateArrayType,
  getMonthDates,
  getWeekName,
  getMonthName
} from '../../utils/dates.utils';
import styles from './monthly.scss';

const MonthlyView: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {}, [t]);

  const year = moment().year();
  const month = moment().month();

  const days: dateArrayType = getMonthDates(year, month);
  const weekNames: Array<string> = getWeekName();
  const monthName: string = getMonthName(year, month);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.month}>{monthName}</h2>
      <div className="container">
        <div className={`row h-100 ${styles['date-container']}`}>
          {weekNames.map(d => (
            <div key={d} className={`${'col'} ${styles.weekday}`}>
              {d}
            </div>
          ))}
          {days.map((e, i) => (
            <Fragment key={e.key}>
              {i % 7 === 0 && <div style={{ height: 0 }} className="w-100" />}
              <div
                className={`col ${
                  e.dateObj.isSame(moment(), 'day') ? styles.today : ''
                } ${styles[e.class]}`}
              >
                {e.dateObj.format('D')}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonthlyView;
