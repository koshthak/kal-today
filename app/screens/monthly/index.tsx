import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import routes from '../../constants/routes.json';

type Props = RouteComponentProps;

const MonthlyView = ({ history }: Props) => {
  return (
    <div>
      <h2 className="m-5">Monthly View</h2>
      <button type="button" className="btn btn-primary" onClick={() => history.push(routes.WEEKLY)}>
        go to weekly
      </button>
      <div className="row">
        <div className="col-6">aaa</div>
        <div className="col-6">aaaa</div>
      </div>
    </div>
  );
};

export default MonthlyView;
