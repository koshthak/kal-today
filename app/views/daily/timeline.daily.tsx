import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  getTimeLine,
  getTimeIndicatorTopPos
} from '../../utils/timeline.utils';
import { statusStateType } from '../../reducers/status.reducer';
import { rootStateType } from '../../reducers';

import styles from './daily.scss';

const DailyTimeline: React.FC = () => {
  const { t } = useTranslation();

  const [timeIndicatorTopPos, setTimeIndicatorTopPos] = useState(0);

  const { today }: statusStateType = useSelector(
    (state: rootStateType) => state.status
  );

  const timeline = getTimeLine();
  const timelineRef: React.RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    if (timelineRef?.current) {
      const top = getTimeIndicatorTopPos(
        today,
        timelineRef,
        'timeline-intervals'
      );
      setTimeIndicatorTopPos(top);
    }
  }, [t]);

  return (
    <div className={styles.timeline} ref={timelineRef}>
      {timeline.map(time => (
        <div className={styles['timeline-time']} key={time.key}>
          <span className={styles['timeline-time-head']}>
            {time.timeObj.format('h a')}
          </span>
          <div
            id="timeline-intervals"
            className={styles['timeline-interval-wrapper']}
          >
            {time.intervals.map(i => (
              <div className={styles['timeline-interval']} key={i.key} />
            ))}
          </div>
        </div>
      ))}
      <div
        className={styles['time-inicator']}
        style={{ top: timeIndicatorTopPos }}
      />
    </div>
  );
};

export default DailyTimeline;
