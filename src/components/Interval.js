import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Bar } from '@ant-design/plots';
import { processDataToStackedBar } from '../util';

const IntervalBar = (props) => {
      const config = {
        data: processDataToStackedBar(props.dataOfTheDay),
        isStack: true,
        xField: 'length',
        yField: 'surgery',
        seriesField: 'type',
        color : ['rgba(0, 0, 0, 0)', 'orange', 'blue', 'red'],
        xAxis: {
            min : 0,
            max: props.dataOfTheDay.interval
        },
        label: {
        
          position: 'middle',
          // 'left', 'middle', 'right'
        
          layout: [
           
            {
              type: 'interval-adjust-position',
            }, 
            {
              type: 'interval-hide-overlap',
            }, 
            
          ],
        },
      };
  return <Bar {...config} />;
};

export default IntervalBar;