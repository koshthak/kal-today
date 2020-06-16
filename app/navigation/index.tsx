import React from 'react';
import { hot } from 'react-hot-loader/root';
import { HashRouter, Switch, Route } from 'react-router-dom';

import ROUTES from '../constants/routes';
import KeyboardShortcut from './keyboardShortcut';

import Sidebar from '../components/sidebar/sidebar.component';
import Header from '../components/header/header.component';

import MonthlyView from '../views/monthly/monthly.view';
import WeeklyView from '../views/weekly/weekly.view';
import DailyView from '../views/daily/daily.view';

import styles from './navigation.scss';

const Navigation: React.FC = () => (
  <HashRouter>
    <Sidebar />
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.views}>
        <Switch>
          <Route path={ROUTES.HOME} exact component={MonthlyView} />
          <Route path={ROUTES.MONTHLY} component={MonthlyView} />
          <Route path={ROUTES.WEEKLY} component={WeeklyView} />
          <Route path={ROUTES.DAILY} component={DailyView} />
        </Switch>
      </div>
    </div>
    <KeyboardShortcut />
  </HashRouter>
);

export default hot(Navigation);
