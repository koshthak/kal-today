import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type Props = RouteComponentProps;

const DailyView: React.FC<Props> = ({ history }: Props) => {
  return (
    <div>
      <h3>Daily View</h3>
      <button type="button" onClick={() => history.goBack()}>
        go back
      </button>
    </div>
  );
};

export default DailyView;
