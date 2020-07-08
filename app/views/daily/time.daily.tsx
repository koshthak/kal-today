import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// import momnet from 'moment';

import { getTimeLine } from '../../utils/dates.utils';

const DailyTime: React.FC = () => {
  const { t } = useTranslation();

  const timeline = getTimeLine();

  useEffect(() => {}, [t]);

  return (
    <div>
      {timeline.map(time => (
        <div key={time.key}>
          <div>
            {time.timeObj.format('hh')}
            {time.intervals.map(i => (
              <div key={i.key}>{i.timeObj.format('hh:mm A')}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DailyTime;
