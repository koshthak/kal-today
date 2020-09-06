import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';


const DatePicker: React.FC = () => {
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection'
        }
      ]);
           
    return (
        <DateRangePicker
            onChange={item => {setState([item.selection]),console.log(item)}}
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