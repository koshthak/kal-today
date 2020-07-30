import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

import { RootStateType } from '../../reducers';
import ImageBtn from '../../components/imageBtn';
import rightArrow from '../../../internals/img/right_arrow.svg';
import { setStatusActiveDate } from '../../actions/status.action';
import { StatusStateType } from '../../reducers/status.reducer';
import { getCalValues } from '../../utils/calendar.utils';

const WeeklyHeader: React.FC = () => {
  const { t } = useTranslation();

  const { activeDate, today }: StatusStateType = useSelector(
    (state: RootStateType) => state.status
  );
  const dispatch = useDispatch();
  const { weekStartDate, weekEndDate, monthShortName, year } = getCalValues(
    activeDate
  );

  useEffect(() => {}, [t]);

  const onPrevClick = () => {
    dispatch(setStatusActiveDate(moment(activeDate).subtract(1, 'w')));
  };

  const onNextClick = () => {
    dispatch(setStatusActiveDate(moment(activeDate).add(1, 'w')));
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
        <span style={{ fontWeight: 'bold' }}>
          <span
            className={`view-header-date ${
              activeDate.isSame(today, 'day') ? 'today' : ''
            }`}
          >
            {`${weekStartDate} - ${weekEndDate}`}
          </span>
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

export default WeeklyHeader;
