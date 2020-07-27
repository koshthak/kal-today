import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

import { rootStateType } from '../../reducers';
import ImageBtn from '../../components/imageBtn';
import rightArrow from '../../../internals/img/right_arrow.svg';
import { setStatusActiveDate } from '../../actions/status.action';
import { statusStateType } from '../../reducers/status.reducer';

const WeeklyHeader: React.FC = () => {
  const { t } = useTranslation();

  const { activeDate }: statusStateType = useSelector(
    (state: rootStateType) => state.status
  );
  const dispatch = useDispatch();

  useEffect(() => {}, [t]);

  const onPrevClick = () => {
    dispatch(setStatusActiveDate(moment(activeDate).subtract(1, 'w')));
  };
  console.log('active date', activeDate);
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
        <span style={{fontWeight: "bold"}}>
        <span className={`view-header-date`}>
          {activeDate.startOf('w').format('DD')}
        </span>
        <span className={`view-header-date`}>-</span>
        <span className={`view-header-date`}>
          {activeDate.endOf('w').format('DD')}
        </span>
        </span>
        <span className={`view-header-date`}>
          {activeDate.endOf('w').format('MMMM')}
        </span>
        <span>
          {activeDate.endOf('w').format('YYYY')}
        </span>
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
