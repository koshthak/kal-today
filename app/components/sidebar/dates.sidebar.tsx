import React, { Fragment } from 'react';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

import {
  dateArrayType,
  getMonthDates,
  getWeekShortName,
  getMonthName
} from '../../utils/dates.utils';
import styles from './sidebar.scss';

type Props = {
  year: number;
  month: number;
};

const SidebarDates: React.FC<Props> = ({ year, month }: Props) => {
  const { t } = useTranslation();

  const days: dateArrayType = getMonthDates(year, month);
  const weekNames: Array<string> = getWeekShortName();
  const monthName: string = getMonthName(year);

  return (
    <div className={`container ${styles.wrapper}`}>
      <h2 className={`text-center ${styles.month}`}>{monthName}</h2>
      <h4 className={`text-center ${styles.year}`}>
        {t('moment', {
          value: { date: moment().year(year), format: 'YYYY' }
        })}
      </h4>
      <div className="row">
        {weekNames.map(d => (
          <div key={d} className={`col ${styles.weekday}`}>
            {d}
          </div>
        ))}
        {days.map((e, i) => (
          <Fragment key={e.key}>
            {i % 7 === 0 && <div className="w-100" />}
            <div
              className={`col text-center ${
                e.dateObj.isSame(moment(), 'day') ? styles.today : ''
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

export default SidebarDates;
