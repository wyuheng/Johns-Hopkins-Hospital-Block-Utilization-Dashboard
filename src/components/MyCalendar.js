import React from 'react';
import dayjs from 'dayjs';
import { DatePicker, Space } from 'antd';

const dateFormat = 'MM/DD/YYYY';

const today = new Date(); // Get the current date

const MyCalendar = (props) => {
  const onChange = (date, dateString) => {
    const month = dateString.slice(0,2), day = dateString.slice(3,5), year = dateString.slice(6, 10);
    props.setDatePicked({
      year: parseInt(year),
      month: parseInt(month),
      day: parseInt(day),
    });
    //console.log(date, dateString);
    console.log("set date:" + {
      year: parseInt(year),
      month: parseInt(month),
      day: parseInt(day),
    });
  };

  return (
    <Space direction="vertical">
      <DatePicker onChange={onChange} format={dateFormat}/>
    </Space>
  );
};
export default MyCalendar;