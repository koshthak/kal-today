import React from 'react';
import moment, { Moment } from 'moment';

import ImageBtn from '../imageBtn';
import rightArrow from '../../../internals/img/right_arrow.svg';
import { getMonthName } from '../../utils/calendar.utils';

import styles from './datepicker.scss';

type Props = {
  date: Moment;
  setDate: (value: React.SetStateAction<Moment>) => void;
};

const DatePickerHeader = ({ date, setDate }: Props) => {
  const month = date.month();
  const year = date.year();

  const monthName: string = getMonthName(month);

  const onPrevClick = () => {
    if (date.isSame(moment(), 'M')) {
      return;
    }
    setDate(moment(date).subtract(1, 'M'));
  };

  const onNextClick = () => {
    setDate(moment(date).add(1, 'M'));
  };

  return (
    <div className={styles.header}>
      <ImageBtn
        imgSrc={rightArrow}
        onClick={onPrevClick}
        className={`view-header-btn ${
          date.isSame(moment(), 'M') ? styles['non-selectable'] : ''
        }`}
        imgClassName="prev-img"
      />
      <div className={styles['month-wrapper']}>
        <p className={`text-center ${styles.month}`}>{monthName}</p>
        <p className={`text-center ${styles.year}`}>{year}</p>
      </div>
      <ImageBtn
        imgSrc={rightArrow}
        onClick={onNextClick}
        className="view-header-btn"
      />
    </div>
  );
};

export default DatePickerHeader;
