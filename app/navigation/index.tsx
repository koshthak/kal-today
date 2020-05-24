import React from 'react';
import { hot } from 'react-hot-loader/root';
import { HashRouter, Switch, Route } from 'react-router-dom';

import routes from '../constants/routes.json';

import MonthlyView from '../screens/monthly';
import WeeklyView from '../screens/weekly';
import Sidebar from '../components/Sidebar';

const Navigation = () => (
  <HashRouter>
    <Sidebar />
    <Switch>
      <Route path={routes.HOME} exact component={MonthlyView} />
      <Route path={routes.MONTHLY} component={MonthlyView} />
      <Route path={routes.WEEKLY} component={WeeklyView} />
    </Switch>
  </HashRouter>
);

export default hot(Navigation);
