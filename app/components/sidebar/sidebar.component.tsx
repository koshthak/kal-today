import React from 'react';
import i18next from 'i18next';

import SidebarHeader from './header.sidebar';
import SidebarDates from './dates.sidebar';

import styles from './sidebar.scss';

const Sidebar: React.FC = () => {
  const handleClick = (lang: string) => {
    i18next.changeLanguage(lang);
  };

  return (
    <div className={styles.sidebar}>
      <SidebarHeader />
      <SidebarDates />
      <div style={{ position: 'absolute', bottom: '100px', left: '100px' }}>
        <p>Change Language</p>
        <button type="button" onClick={() => handleClick('en')}>
          English
        </button>
        <button type="button" onClick={() => handleClick('ar')}>
          Arabic
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
