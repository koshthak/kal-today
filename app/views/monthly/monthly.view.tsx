import React, { Fragment } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import moment from 'moment';

import ROUTES from '../../constants/routes';

import {
  dateArrayType,
  getMonthDates,
  getMonthName,
  getWeekName
} from '../../utils/dates.utils';
import styles from './monthly.scss';

type Props = RouteComponentProps;

const MonthlyView: React.FC<Props> = ({ history }: Props) => {
  const { t } = useTranslation();

  const year = moment().year();
  const month = moment().month();

  const days: dateArrayType = getMonthDates(year, month);
  const weekNames: Array<string> = getWeekName();
  const monthName: string = getMonthName(year);

  const handleClick = (lang: string) => {
    i18next.changeLanguage(lang);
  };

  return (
    <>
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
      <div style={{ position: 'absolute', bottom: '0', left: '0' }}>
        <h2>Monthly View</h2>
        <button type="button" onClick={() => handleClick('en')}>
          English
        </button>
        <button type="button" onClick={() => handleClick('ar')}>
          Arabic
        </button>
        <button type="button" onClick={() => history.push(ROUTES.WEEKLY)}>
          go to weekly
          <h3>{t('close')}</h3>
        </button>
      </div>
    </>
  );
};

export default MonthlyView;
