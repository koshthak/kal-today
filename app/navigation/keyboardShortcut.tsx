import React, { useEffect } from 'react';
import electronLocalshortcut from 'electron-localshortcut';
import { BrowserWindow, remote } from 'electron';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import ROUTES from '../constants/routes';

type Props = RouteComponentProps;
const windowRef: BrowserWindow = remote.getCurrentWindow();

const KeyboardShortcut: React.FC<Props> = ({ history }: Props) => {
  const regeisterShortcuts = () => {
    electronLocalshortcut.register(windowRef, 'D', () => {
      history.push(ROUTES.DAILY);
    });
    electronLocalshortcut.register(windowRef, 'W', () => {
      history.push(ROUTES.WEEKLY);
    });
    electronLocalshortcut.register(windowRef, 'M', () => {
      history.push(ROUTES.MONTHLY);
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
