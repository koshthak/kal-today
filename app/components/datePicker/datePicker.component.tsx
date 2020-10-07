import React from 'react';
import { Moment } from 'moment';

import DatePickerDates, { SeclectionRange } from './dates.datePicker';
import DatePickerSelectionPanel from './selectionPanel.datepicker';

import styles from './datepicker.scss';

type Props = {
  conatinerClassName?: string;
  showSelectionPanel?: boolean;
  rangeSelection?: boolean;
  onChange: (value: SeclectionRange | Moment | null) => void;
};

const DatePicker = (props: Props) => {
  const {
    onChange,
    rangeSelection,
    showSelectionPanel,
    conatinerClassName,
  } = props;

  return (
    <div className={`${styles.conatiner} ${conatinerClassName}`}>
      {showSelectionPanel && <DatePickerSelectionPanel />}
      <DatePickerDates
        onChange={onChange}
        rangeSelection={rangeSelection || false}
      />
    </div>
  );
};

DatePicker.defaultProps = {
  conatinerClassName: '',
  showSelectionPanel: false,
  rangeSelection: false,
};

export default DatePicker;
