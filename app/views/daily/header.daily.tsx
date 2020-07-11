import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

import { getMonthName } from '../../utils/calendar.utils';
import { statusStateType } from '../../reducers/status.reducer';
import { setStatusCurrtDate } from '../../actions/status.action';
import { rootStateType } from '../../reducers';
import rightArrow from '../../../internals/img/right_arrow.svg';

const DailyHeader: React.FC = () => {
  const { t } = useTranslation();

  const { today, activeDate }: statusStateType = useSelector(
    (state: rootStateType) => state.status
  );
  const dispatch = useDispatch();

  useEffect(() => {}, [t]);

  const monthName: string = getMonthName(activeDate.month());

  const onPrevClick = () => {
    dispatch(setStatusCurrtDate(moment(activeDate).subtract(1, 'd')));
  };

  const onNextClick = () => {
    dispatch(setStatusCurrtDate(moment(activeDate).add(1, 'd')));
  };

  return (
    <div className="view-header">
      <button
        type="button"
        className="transparent-btn view-header-btn"
        onClick={onPrevClick}
      >
        <img src={rightArrow} className="prev-img" alt="prev-btn" />
      </button>
      <h4 className="view-header-name">
        <span
          className={`view-header-date ${
            activeDate.isSame(today, 'day') ? 'today' : ''
          }`}
        >
          {activeDate.date()}
        </span>
        <span className="view-header-month">{monthName}</span>
        <span className="view-header-year">{activeDate.year()}</span>
      </h4>
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

export default DailyHeader;
