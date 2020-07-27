import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import WeeklyHeader from './header.weekly';
import WeeklyTimeline from './timeline.weekly';

type Props = RouteComponentProps;

const WeeklyView: React.FC<Props> = ({ history }: Props) => {
  return (
    <div>
      <WeeklyHeader />
      <WeeklyTimeline />
    </div>
  );
};

export default WeeklyView;
