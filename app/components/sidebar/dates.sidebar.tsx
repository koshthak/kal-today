import React, { Fragment } from 'react';
import moment, { Moment } from 'moment';
import styles from './sidebar.scss';

const SidebarDates: React.FC = () => {
  const CURR: Moment = moment();

  const totalDays = [];

  const weekdayshortname = moment.weekdaysShort();

  const firstDayOfMonth = moment(CURR)
    .startOf('month')
    .format('d');

  const lastDayOfMonth = moment(CURR)
    .endOf('month')
    .format('d');

  const previousMonthDates = [...Array(parseInt(firstDayOfMonth, 10)).keys()];
  previousMonthDates.map(d =>
    totalDays.push({
      key: `prev-date-${d}`,
      dateObj: moment(CURR).date(-d),
      class: 'prev-month'
    })
  );

  for (let d = 1; d <= moment(CURR).daysInMonth(); d += 1) {
    totalDays.push({
      key: `date-${d}`,
      dateObj: moment(CURR).date(d),
      class: 'curr-month'
    });
  }

  const nextMonthDates = [
    ...Array(7 - parseInt(lastDayOfMonth, 10) - 1).keys()
  ];

  nextMonthDates.map(d =>
    totalDays.push({
      key: `next-date-${d}`,
      dateObj: moment(CURR)
        .add(1, 'M')
        .date(d),
      class: 'next-month'
    })
  );

  return (
    <div className="container">
      <h2 className="text-center">{CURR.format('MMMM')}</h2>
      <h4 className="text-center">{CURR.format('YYYY')}</h4>
      <div className="row">
        {weekdayshortname.map(d => (
          <div key={d} className="col">
            {d}
          </div>
        ))}
        {totalDays.map((e, i) => (
          <Fragment key={e.key}>
            {i % 7 === 0 && <div className="w-100" />}
            <div
              className={[
                'col',
                e.dateObj.isSame(CURR) ? styles.today : '',
                styles[e.class]
              ].join(' ')}
            >
              {e.dateObj.format('D')}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default SidebarDates;
