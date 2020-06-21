import React, { Fragment, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
  dateArrayType,
  getMonthDates,
  getWeekName
} from '../../utils/dates.utils';
import { rootStateType } from '../../reducers';
import { statusStateType } from '../../reducers/status.reducer';

import styles from './monthly.scss';

const MonthlyDates: React.FC = () => {
  const { t } = useTranslation();

  const { today, year, month }: statusStateType = useSelector(
    (state: rootStateType) => state.status
  );

  useEffect(() => {}, [t]);

  const days: dateArrayType = getMonthDates(year, month);
  const weekNames: Array<string> = getWeekName();

  return (
    <div className="container">
      <div className={`row h-100 ${styles['date-container']}`}>
        {weekNames.map(d => (
          <div key={d} className={`col ${styles.weekday}`}>
            {d}
          </div>
        ))}
        {days.map((e, i) => (
          <Fragment key={e.key}>
            {i % 7 === 0 && <div style={{ height: 0 }} className="w-100" />}
            <div
              className={`col ${
                e.dateObj.isSame(today, 'day') ? styles.today : ''
              } ${styles[e.class]}`}
            >
              {e.dateObj.format('D')}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default MonthlyDates;
