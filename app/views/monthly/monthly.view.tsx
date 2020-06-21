import React from 'react';

import MonthlyDates from './dates.monthly';
import MonthlyHeader from './header.monthly';

const MonthlyView: React.FC = () => {
  return (
    <div className="container h-100">
      <MonthlyHeader />
      <MonthlyDates />
    </div>
  );
};

export default MonthlyView;
