import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
    </div>
  );
};

export default Sidebar;
