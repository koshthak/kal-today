import React, { Fragment, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import moment, { Moment } from 'moment';

import {
  DateArrayType,
  getMonthDates,
  getWeekShortName,
} from '../../utils/calendar.utils';

import styles from './datepicker.scss';
import DatePickerHeader from './header.datepicker';

export type SeclectionRange = {
  startDate: Moment | null;
  endDate: Moment | null;
};

type Props = {
  rangeSelection: boolean;
  onChange: (value: SeclectionRange | Moment | null) => void;
};

const DatePickerDates = ({ rangeSelection, onChange }: Props) => {
  const { t } = useTranslation();

  useEffect(() => {}, [t]);

  const [date, setDate] = useState(moment());

  const [previewDate, setPreviewDate] = useState<Moment | null | undefined>();
  const [range, setRange] = useState<SeclectionRange>({
    startDate: null,
    endDate: null,
  });

  const year = date.year();
  const month = date.month();

  const days: DateArrayType = getMonthDates(year, month);
  const weekNames: Array<string> = getWeekShortName();

  const onValueChange = (value: SeclectionRange) => {
    onChange(rangeSelection ? value : value.startDate);
  };

  const onMouseEnter = (d: Moment) => {
    if (!range.endDate && rangeSelection) {
      setPreviewDate(d);
    }
  };

  const onMouseDown = (d: Moment) => {
    if (d.isBefore(moment(), 'day')) {
      return;
    }
    if (rangeSelection && range.startDate) {
      return;
    }
    setRange({ startDate: d, endDate: null });
    setPreviewDate(null);
    onValueChange({ startDate: d, endDate: null });
  };

  const onMouseUp = (d: Moment) => {
    if (d.isSame(range.startDate, 'day')) {
      return;
    }
    if (d.isBefore(moment(), 'day')) {
      return;
    }
    if (rangeSelection && range.endDate) {
      setRange({ startDate: d, endDate: null });
      setPreviewDate(null);
      onValueChange({ startDate: d, endDate: null });
      return;
    }
    if (d.isBefore(range.startDate)) {
      setRange({ startDate: d, endDate: range.startDate });
      onValueChange({ startDate: d, endDate: range.startDate });
      return;
    }
    setRange({ startDate: range.startDate, endDate: d });
    onValueChange({ startDate: d, endDate: range.startDate });
  };

  return (
    <div className={styles['dates-container']}>
      <DatePickerHeader date={date} setDate={setDate} />
      <div className="row">
        {weekNames.map((d) => (
          <div key={d} className={`text-center col ${styles.weekday}`}>
            {d}
          </div>
        ))}
        {days.map((d, i) => (
          <Fragment key={d.key}>
            {i % 7 === 0 && <div className="w-100" />}
            <button
              type="button"
              onMouseDown={() => onMouseDown(d.dateObj)}
              onMouseUp={() => onMouseUp(d.dateObj)}
              onMouseEnter={() => onMouseEnter(d.dateObj)}
              className={`col transparent-btn text-center ${
                d.dateObj.isSame(moment(), 'day') ? styles.today : ''
              } ${
                d.dateObj.isSame(range.endDate, 'day') ? styles['end-date'] : ''
              } ${
                d.dateObj.isSame(range.startDate, 'day')
                  ? styles['start-date']
                  : ''
              } ${
                d.dateObj.isBetween(range.startDate, previewDate) ||
                d.dateObj.isBetween(previewDate, range.startDate)
                  ? styles['preview-date']
                  : ''
              } ${
                d.dateObj.isBetween(range.startDate, range.endDate)
                  ? styles['selected-date']
                  : ''
              } ${
                d.dateObj.isBefore(moment())
                  ? styles['non-selectable']
                  : styles[d.class]
              }`}
            >
              <span className={styles['date-btn-txt']}>
                {d.dateObj.format('D')}
              </span>
            </button>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default DatePickerDates;
