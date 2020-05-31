import React from 'react';

import styles from './sidebar.scss';

const SidebarHeader: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <span>K.</span>
      </div>
      <div className={styles['header-description']}>Kal- daily</div>
    </div>
  );
};

export default SidebarHeader;
