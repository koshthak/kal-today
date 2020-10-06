import React from 'react';
// import { DateRangePicker } from 'react-date-range';
// import { addDays } from 'date-fns';
// import moment from 'moment';

import DatePickerSelectionPreview from './selectionPreview.datepicker';
import styles from './datepicker.scss';
import DatePickerDates from './dates.datePicker';

type Props = {
  setRange: React.SetStateAction<unknown>;
  conatinerClassName?: string;
  showSelectionPreview?: boolean;
};

const DatePicker = (props: Props) => {
  const { setRange, showSelectionPreview, conatinerClassName } = props;
  // const [state, setState] = useState([
  //   {
  //     startDate: moment(),
  //     endDate: moment().add(7, 'd'),
  //     key: 'selection',
  //   },
  // ]);

  const onDateChange = (item: any) => {
    // setState([item.selection]);
    // setRange(item.selection);
    // console.log(item);
  };

  return (
    <div className={`${styles.conatiner} ${conatinerClassName}`}>
      {showSelectionPreview && <DatePickerSelectionPreview />}
      <DatePickerDates />
    </div>
  );
};

DatePicker.defaultProps = {
  conatinerClassName: '',
  showSelectionPreview: false,
};

export default DatePicker;
