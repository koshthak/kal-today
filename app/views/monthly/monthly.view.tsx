import React from 'react';

import MonthlyDates from './dates.monthly';
import MonthlyHeader from './header.monthly';

import styles from './monthly.scss';

const MonthlyView: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <MonthlyHeader />
      <MonthlyDates />
    </div>
  );
};

export default MonthlyView;
