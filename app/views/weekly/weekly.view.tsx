import React from 'react';
import WeeklyHeader from './header.weekly';
import WeeklyTimeline from './timeline.weekly';

const WeeklyView: React.FC = () => {
  return (
    <div className="container h-100">
      <WeeklyHeader />
      <WeeklyTimeline />
    </div>
  );
};

export default WeeklyView;
