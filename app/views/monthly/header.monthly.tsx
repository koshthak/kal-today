import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { getMonthName } from '../../utils/dates.utils';
import { statusStateType } from '../../reducers/status.reducer';
import { setStatusMonth } from '../../actions/status.action';
import { rootStateType } from '../../reducers';

import rightArrow from '../../../internals/img/right_arrow.svg';

import styles from './monthly.scss';

const MonthlyHeader: React.FC = () => {
  const { t } = useTranslation();

  const { month, year }: statusStateType = useSelector(
    (state: rootStateType) => state.status
  );
  const dispatch = useDispatch();

  useEffect(() => {}, [t]);

  const monthName: string = getMonthName(year, month);

  const onPrevClick = () => {
    dispatch(setStatusMonth(month - 1));
  };

  const onNextClick = () => {
    dispatch(setStatusMonth(month + 1));
  };

  return (
    <div className={styles.month}>
      <img src={rightArrow} 
        className={`${styles['month-btn']} ${styles['month-reverse-btn']} `}
        onClick={onPrevClick}
      alt=""/>
      <h2 className={styles['month-name']}>{monthName}</h2>
      <img src={rightArrow} 
        className={styles['month-btn']}
        onClick={onNextClick}
      alt=""/>
    </div>
  );
};

export default MonthlyHeader;
