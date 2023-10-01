import React from 'react';
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

const DateMenu = (props) => {
  setShowDays = props.setShowDays;

  return (
  <div className='DateMenu'>
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