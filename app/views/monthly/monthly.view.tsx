import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import ROUTES from '../../constants/routes.json';

type Props = RouteComponentProps;

const MonthlyView: React.FC<Props> = ({ history }: Props) => {
  return (
    <div>
      <h2>Monthly View</h2>
      <button type="button" onClick={() => history.push(ROUTES.WEEKLY)}>
        go to weekly
      </button>
    </div>
  );
};

export default MonthlyView;
