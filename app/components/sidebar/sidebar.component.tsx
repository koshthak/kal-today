import React from 'react';

import styles from './sidebar.scss';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <span>K.</span>
        </div>
        <div className={styles['header-description']}>Kal- daily</div>
      </div>
    </div>
  );
};

export default Sidebar;
