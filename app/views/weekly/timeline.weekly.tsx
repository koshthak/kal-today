import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  getTimeIndicatorTopPos,
  getWeekTimeLine,
} from '../../utils/timeline.utils';
import { StatusStateType } from '../../reducers/status.reducer';
import { RootStateType } from '../../reducers';

import styles from './weekly.scss';
import { getWeekName } from '../../utils/calendar.utils';

const WeeklyTimeline: React.FC = () => {
  const { t } = useTranslation();

  const [timeIndicatorTopPos, setTimeIndicatorTopPos] = useState(0);

  const { today, activeDate }: StatusStateType = useSelector(
    (state: RootStateType) => state.status
  );

  const weekTimeline = getWeekTimeLine(activeDate);
  const weekNames = getWeekName();
  const timelineRef: React.RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    if (timelineRef?.current) {
      const top = getTimeIndicatorTopPos(
        today,
        timelineRef,
        'week-day-intervals'
      );
      setTimeIndicatorTopPos(top);
    }
  }, [t, today]);

  return (
    <>
      <div className={styles['week-day-header-wrapper']}>
        {weekNames.map((d) => (
          <div key={d} className={styles['week-day-header']}>
            {d}
          </div>
        ))}
      </div>

      <div className={styles.week}>
        {weekTimeline.map((weekday, weekInx) => (
          <div
            key={weekday.key}
            ref={timelineRef}
            className={styles[weekday.class]}
          >
            {weekday.timeline.map((time) => (
              <div className={styles['week-day-time']} key={time.key}>
                {!weekInx && (
                  <span className={styles['week-day-time-head']}>
                    {time.timeObj.format('h a')}
                  </span>
                )}
                <div className={styles['week-day-interval-wrapper']}>
                  {time.intervals.map((i) => (
                    <div
                      className={`week-day-intervals ${styles['week-day-interval']}`}
                      key={i.key}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
        <div
          className={styles['time-inicator']}
          style={{ top: timeIndicatorTopPos }}
        />
      </div>
    </>
  );
};

export default WeeklyTimeline;
