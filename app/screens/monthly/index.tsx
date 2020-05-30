import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import routes from '../../constants/routes.json';

type Props = RouteComponentProps;

const MonthlyView = ({ history }: Props) => {
  return (
    <div>
      <h2>Monthly View</h2>
      <button type="button" onClick={() => history.push(routes.WEEKLY)}>
        go to weekly
      </button>
    </div>
  );
};

export default MonthlyView;
