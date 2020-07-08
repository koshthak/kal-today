import React from 'react';

import DailyHeader from './header.daily';
import DailyTime from './time.daily';

const DailyView: React.FC = () => {
  return (
    <div>
      <DailyHeader />
      <DailyTime />
    </div>
  );
};

export default DailyView;
