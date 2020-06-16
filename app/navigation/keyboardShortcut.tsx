import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import ROUTES from '../constants/routes';

type Props = RouteComponentProps;

const KeyboardShortcut: React.FC<Props> = ({ history }: Props) => {
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'D' || event.key === 'd') {
      history.push(ROUTES.DAILY);
      return;
    }
    if (event.key === 'W' || event.key === 'w') {
      history.push(ROUTES.WEEKLY);
      return;
    }
    if (event.key === 'M' || event.key === 'm') {
      history.push(ROUTES.MONTHLY);
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyPress, true);
    return () => {
      window.removeEventListener('keyup', handleKeyPress, true);
    };
  }, []);

  return <></>;
};

export default withRouter(KeyboardShortcut);
