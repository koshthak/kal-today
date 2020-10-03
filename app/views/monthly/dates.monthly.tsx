import React, { Fragment, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
  DateArrayType,
  getMonthDates,
  getWeekName,
} from '../../utils/calendar.utils';
import { RootStateType } from '../../reducers';
import { StatusStateType } from '../../reducers/status.reducer';
import { EventStateType } from '../../reducers/event.reducer';
import CAL_CONST from '../../constants/calendar';

import styles from './monthly.scss';

const MonthlyDates: React.FC = () => {
  const { t } = useTranslation();

  const { today, activeDate }: StatusStateType = useSelector(
    (state: RootStateType) => state.status
  );
  const { eventList }: EventStateType = useSelector(
    (state: RootStateType) => state.event
  );

  useEffect(() => {}, [t]);

  const days: DateArrayType = getMonthDates(
    activeDate.year(),
    activeDate.month()
  );
  const weekNames: Array<string> = getWeekName();
  const isMaxRowsView =
    days.length / CAL_CONST.DAYS_IN_WEEK === CAL_CONST.MAX_ROW_IN_MONTH;

  return (
    <div className="row">
      {weekNames.map((d) => (
        <div key={d} className={`col ${styles.weekday}`}>
          {d}
        </div>
      ))}
      {days.map((d, i) => (
        <Fragment key={d.key}>
          {i % CAL_CONST.DAYS_IN_WEEK === 0 && (
            <div style={{ height: 0 }} className="w-100" />
          )}
          <div
            className={[
              'col',
              isMaxRowsView ? styles['max-rows-view'] : '',
              d.dateObj.isSame(today, 'day') ? styles.today : '',
              d.dateObj.isBefore(today, 'day') ? styles.prevdays : '',
              styles[d.class],
            ].join(' ')}
          >
            {d.dateObj.format('D')}
            {eventList
              .filter((e) =>
                d.dateObj.isBetween(e.range.startDate, e.range.endDate)
              )
              .map((e) => (
                <div key={e.title}>{e.title}</div>
              ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default MonthlyDates;
