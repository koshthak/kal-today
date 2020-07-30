import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

import { getCalValues } from '../../utils/calendar.utils';
import { StatusStateType } from '../../reducers/status.reducer';
import { setStatusActiveDate } from '../../actions/status.action';
import { RootStateType } from '../../reducers';
import ImageBtn from '../../components/imageBtn';
import rightArrow from '../../../internals/img/right_arrow.svg';

const DailyHeader: React.FC = () => {
  const { t } = useTranslation();

  const { today, activeDate }: StatusStateType = useSelector(
    (state: RootStateType) => state.status
  );
  const dispatch = useDispatch();

  useEffect(() => {}, [t]);

  const { date, monthShortName, year } = getCalValues(activeDate);

  const onPrevClick = () => {
    dispatch(setStatusActiveDate(moment(activeDate).subtract(1, 'd')));
  };

  const onNextClick = () => {
    dispatch(setStatusActiveDate(moment(activeDate).add(1, 'd')));
  };

  return (
    <div className="view-header">
      <ImageBtn
        imgSrc={rightArrow}
        onClick={onPrevClick}
        className="view-header-btn"
        imgClassName="prev-img"
      />
      <h4 className="view-header-name">
        <span
          className={`view-header-date ${
            activeDate.isSame(today, 'day') ? 'today' : ''
          }`}
        >
          {date}
        </span>
        <span className="view-header-month">{monthShortName}</span>
        <span className="view-header-year">{year}</span>
      </h4>
      <ImageBtn
        imgSrc={rightArrow}
        onClick={onNextClick}
        className="view-header-btn"
      />
    </div>
  );
};

export default DailyHeader;
