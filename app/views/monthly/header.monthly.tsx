import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

import { getMonthName, getYear } from '../../utils/calendar.utils';
import { statusStateType } from '../../reducers/status.reducer';
import { setStatusCurrtDate } from '../../actions/status.action';
import { rootStateType } from '../../reducers';
import rightArrow from '../../../internals/img/right_arrow.svg';

import styles from './monthly.scss';

const MonthlyHeader: React.FC = () => {
  const { t } = useTranslation();

  const { activeDate }: statusStateType = useSelector(
    (state: rootStateType) => state.status
  );
  const dispatch = useDispatch();

  useEffect(() => {}, [t]);

  const monthName: string = getMonthName(activeDate.month());
  const year: string = getYear(activeDate.year());

  const onPrevClick = () => {
    dispatch(setStatusCurrtDate(moment(activeDate).subtract(1, 'M')));
  };

  const onNextClick = () => {
    dispatch(setStatusCurrtDate(moment(activeDate).add(1, 'M')));
  };

  return (
    <div className={`view-header ${styles.header}`}>
      <button
        type="button"
        className="transparent-btn view-header-btn"
        onClick={onPrevClick}
      >
        <img src={rightArrow} className="prev-img" alt="prev-btn" />
      </button>
      <h3 className="view-header-name">
        <span className="view-header-month">{monthName}</span>
        <span className="view-header-year">{year}</span>

      </h3>
      <button
        type="button"
        className="transparent-btn view-header-btn"
        onClick={onNextClick}
      >
        <img src={rightArrow} alt="next-btn" />
      </button>
    </div>
  );
};

export default MonthlyHeader;
