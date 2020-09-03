import React from 'react';

import DailyHeader from './header.daily';
import DailyTimeline from './timeline.daily';

const DailyView: React.FC = () => {
  return (
    <div className="container h-100">
      <DailyHeader />
      <DailyTimeline />
    </div>
  );
};

export default DailyView;
