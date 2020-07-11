import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { getTimeLine } from '../../utils/calendar.utils';
import styles from './daily.scss';

const DailyTimeline: React.FC = () => {
  const { t } = useTranslation();

  const timeline = getTimeLine();

  useEffect(() => {}, [t]);

  return (
    <div className={styles.timeline}>
      {timeline.map(time => (
        <div className={styles['timeline-time']} key={time.key}>
          <div className={styles['timeline-interval-wrapper']}>
            {time.timeObj.format('hh A')}
            {time.intervals.map(i => (
              <div className={styles['timeline-interval']} key={i.key}>
                {/* {i.timeObj.format('hh:mm A')} */}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DailyTimeline;
