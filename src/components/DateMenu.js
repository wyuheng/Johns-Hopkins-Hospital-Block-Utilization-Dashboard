import React from 'react';
import MyCalendar from './MyCalendar';
import { calculateDate } from '../dataGenerate';
import { Button, Dropdown, Space } from 'antd';
const items = [
  {
    key: '7',
    label: (
      <p onClick={() => {setShowDays(7)}}>Last 7 Days </p>
    ),
  },
  {
    key: '14',
    label: (
      <p onClick={() => {setShowDays(14)}}>Last 14 Days</p>
    ),
  },
  {
    key: '30',
    label: (
      <p onClick={() => {setShowDays(30)}}>Last 30 Days</p>
    ),
  },
];

let setShowDays = null;

const toDateStr = (datePicked) => {
  return datePicked.month + "/" + datePicked.day + "/" + datePicked.year;
}

const DateMenu = (props) => {
  setShowDays = props.setShowDays;

  return (
  <div className='DateMenu'>
    <h3 style = {{color : 'white',  paddingLeft : '20px', paddingRight : '20px'}}> 
      Block Utilization Report: 
    </h3>
    <h1 style = {{fontFamily : "'Times New Roman'", color : 'white', display : 'flex', alignSelf : "baseline", fontWeight : "bold"}}> 
      {toDateStr(calculateDate(props.datePicked, props.showDays))} - {toDateStr(props.datePicked) }
    </h1>

    <div className = "MyCalendar">
      <MyCalendar  setDatePicked = {props.setDatePicked}/>
    </div>

    <Space direction="vertical">
      <Space wrap>

        <Dropdown
          menu={{
            items,
          }}
          placement="bottom"
        >
          <Button className='DateMenuButton'>Show the past {props.showDays} days</Button>
        </Dropdown>
      </Space>
    </Space>

    
  </div>
)};
export default DateMenu;