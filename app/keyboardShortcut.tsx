import React, { useEffect } from 'react';
import electronLocalshortcut from 'electron-localshortcut';
import { BrowserWindow, remote } from 'electron';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import ROUTES from './constants/routes';
import { resetStatus } from './actions/status.action';

type Props = RouteComponentProps;
const windowRef: BrowserWindow = remote.getCurrentWindow();

const KeyboardShortcut: React.FC<Props> = ({ history }: Props) => {
  const dispatch = useDispatch();

  const regeisterShortcuts = () => {
    // change view to daily
    electronLocalshortcut.register(windowRef, 'D', () => {
      history.push(ROUTES.DAILY);
    });
    // change view to weekly
    electronLocalshortcut.register(windowRef, 'W', () => {
      history.push(ROUTES.WEEKLY);
    });
    // change view to monthly
    electronLocalshortcut.register(windowRef, 'M', () => {
      history.push(ROUTES.MONTHLY);
    });
    // reset to todays date in all view
    electronLocalshortcut.register(windowRef, 'T', () => {
      dispatch(resetStatus());
    });
  };

  useEffect(() => {
    regeisterShortcuts();
    return () => {
      electronLocalshortcut.unregisterAll(windowRef);
    };
  }, []);

  return <></>;
};

export default withRouter(KeyboardShortcut);
