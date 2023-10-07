import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import IntervalBar from './Interval';
import TextDivider from './Divider';

function MyComponent(props) {
    const onClose = () => {
      props.setIsDrawerVisible(false);
    };

    const config = {
          title: "Block Utilization Information of " + (props.dataOfTheDay != null ? props.dataOfTheDay.Date : null),
          placement:"right", // Set the placement (right, left, top, bottom)
          closable: false,
          width : '70vw',
          onClose : onClose,
          open : props.isDrawerVisible
    }

    const getDrawerBlock = (dataOfTheDay) => {    
      if (dataOfTheDay === null)
        return null;
  
      const ans = [];
      for (let i = 0; i < dataOfTheDay.surgeries.length; ++i) {
        ans.push(<div className = "DrawerBlock" key = {i}>
          <TextDivider surgery = {dataOfTheDay.surgeries[i]} index = {i} />
        </div>);
      }
      return ans;
    }
  
    return (
      <div>
        <Drawer
            className = "Drawer"
            {...config}
        >
          <IntervalBar dataOfTheDay = {props.dataOfTheDay}/>
          {props.isDrawerVisible ? getDrawerBlock(props.dataOfTheDay) : null}
        </Drawer>
      </div>
    );
  }

export default MyComponent;