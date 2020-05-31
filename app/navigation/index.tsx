import React from 'react';
import { hot } from 'react-hot-loader/root';
import { HashRouter, Switch, Route } from 'react-router-dom';

import ROUTES from '../constants/routes.json';

import Sidebar from '../components/sidebar/sidebar.component';
import Header from '../components/header/header.component';

import MonthlyView from '../views/monthly/monthly.view';
import WeeklyView from '../views/weekly/weekly.view';

import styles from './navigation.scss';

const Navigation: React.FC = () => (
  <HashRouter>
    <Sidebar />
    <div className={styles.views}>
      <Header />
      <Switch>
        <Route path={ROUTES.HOME} exact component={MonthlyView} />
        <Route path={ROUTES.MONTHLY} component={MonthlyView} />
        <Route path={ROUTES.WEEKLY} component={WeeklyView} />
      </Switch>
    </div>
  </HashRouter>
);

export default hot(Navigation);
