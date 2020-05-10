import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type Props = RouteComponentProps;

const WeeklyView = ({ history }: Props) => {
  return (
    <div>
      <h3>Weekly View</h3>
      <button type="button" onClick={() => history.goBack()}>
        go back
      </button>
    </div>
  );
};

export default WeeklyView;
