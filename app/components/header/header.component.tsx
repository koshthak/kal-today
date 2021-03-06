import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './header.scss';
import { resetStatus } from '../../actions/status.action';
import ROUTES from '../../constants/routes';

type Props = RouteComponentProps;

const Header: React.FC<Props> = ({ history }: Props) => {
  const dispatch = useDispatch();

  const changeView = (e: React.FormEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget;
    switch (value) {
      case 'monthly':
        history.push(ROUTES.MONTHLY);
        break;
      case 'daily':
        history.push(ROUTES.DAILY);
        break;
      case 'weekly':
        history.push(ROUTES.WEEKLY);
        break;
      default:
        history.push(ROUTES.MONTHLY);
    }
  };

  const setToday = () => {
    dispatch(resetStatus());
  };

  return (
    <div className={styles.header}>
      <select className={styles.select} onChange={changeView}>
        <option value="monthly">Monthly</option>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
      </select>
      <button className={styles.today} type="button" onClick={setToday}>
        Today
      </button>
    </div>
  );
};

export default withRouter(Header);
