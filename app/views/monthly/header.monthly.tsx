import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

import { getCalValues } from '../../utils/calendar.utils';
import { StatusStateType } from '../../reducers/status.reducer';
import { setStatusActiveDate } from '../../actions/status.action';
import { RootStateType } from '../../reducers';
import rightArrow from '../../../internals/img/right_arrow.svg';
import ImageBtn from '../../components/imageBtn';

import styles from './monthly.scss';

const MonthlyHeader: React.FC = () => {
  const { t } = useTranslation();

  const { activeDate }: StatusStateType = useSelector(
    (state: RootStateType) => state.status
  );
  const dispatch = useDispatch();

  useEffect(() => {}, [t]);

  const { monthName, year } = getCalValues(activeDate);

  const onPrevClick = () => {
    dispatch(setStatusActiveDate(moment(activeDate).subtract(1, 'M')));
  };

  const onNextClick = () => {
    dispatch(setStatusActiveDate(moment(activeDate).add(1, 'M')));
  };

  return (
    <div className={`view-header ${styles.header}`}>
      <ImageBtn
        imgSrc={rightArrow}
        onClick={onPrevClick}
        className="view-header-btn"
        imgClassName="prev-img"
      />
      <h3 className="view-header-name">
        <span className="view-header-month">{monthName}</span>
        <span className="view-header-year">{year}</span>
      </h3>
      <ImageBtn
        imgSrc={rightArrow}
        onClick={onNextClick}
        className="view-header-btn"
      />
    </div>
  );
};

export default MonthlyHeader;
