import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';


const DatePicker = (props: { setRange: Function }) => {
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection'
        }
      ]);

    const onDateChange = (item: any) => {
      setState([item.selection]);
      props.setRange(item.selection);
      console.log(item);
    }
           
    return (
        <DateRangePicker
            // onChange={item => {setState([item.selection]),console.log(item)}}
            onChange={onDateChange}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            color="#6f52ed"
            rangeColors={["#6f52ed"]}
            months={1}
            ranges={state}
            direction="horizontal"
        />
    );
  };
  
  export default DatePicker;