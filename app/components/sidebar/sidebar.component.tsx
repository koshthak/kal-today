import React from 'react';

import SidebarHeader from './header.sidebar';
import SidebarDates from './dates.sidebar';
import styles from './sidebar.scss';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <SidebarHeader />
      <SidebarDates />
    </div>
  );
};

export default Sidebar;
