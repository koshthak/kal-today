import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import i18next from 'i18next';
import moment from 'moment';

import { setSidebaeCurrentDate } from '../../actions/sidebar.action';
import SidebarHeader from './header.sidebar';
import SidebarDates from './dates.sidebar';
import { rootStateType } from '../../reducers';

import styles from './sidebar.scss';
import { sidebarStateType } from '../../reducers/sidebar.reducer';

const Sidebar: React.FC = () => {
  const { activeDate }: sidebarStateType = useSelector(
    (state: rootStateType) => state.sidebar
  );

  const dispatch = useDispatch();

  const handleClick = (lang: string) => {
    i18next.changeLanguage(lang);
  };

  useEffect(() => {
    dispatch(setSidebaeCurrentDate(moment()));
  }, []);

  return (
    <div className={styles.sidebar}>
      <SidebarHeader />
      {activeDate && (
        <SidebarDates
          year={moment(activeDate).year()}
          month={moment(activeDate).month()}
        />
      )}
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
