import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import IntervalBar from './Interval';
import TextDivider from './Divider';
import {Divider} from 'antd';

function MyComponent(props) {
    
    const showDrawer = () => {
      props.setIsDrawerVisible(true);
    };
  
    const onClose = () => {
      props.setIsDrawerVisible(false);
    };

    const config = {
          title: "Block Utilization Information of " + (props.dataOfTheDay != null ? props.dataOfTheDay.Date : null),
          placement:"right", // Set the placement (right, left, top, bottom)
          closable: false,
          width : 1000,
          onClose : onClose,
          open : props.isDrawerVisible
    }

    const getDrawBlock = (dataOfTheDay) => {
      
      if (dataOfTheDay === null)
        return null;
      console.log("Get DrawBlock");
      
      const ans = [];
      for (let i = 0; i < dataOfTheDay.surgeries.length; ++i) {
        ans.push(<div className = "DrawerBlock">
          <TextDivider surgery = {dataOfTheDay.surgeries[i]} index = {i}/>
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
          {props.isDrawerVisible ? getDrawBlock(props.dataOfTheDay) : null}
        </Drawer>
      </div>
    );
  }

export default MyComponent;