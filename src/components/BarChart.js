import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';
import { getData } from '../util';





const BarChart = (props) => {
  const [data, setData] = useState(getData(7));

    useEffect(() => {
        asyncFetch();
    }, [props.showDays]);



  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/be63e0a2-d2be-4c45-97fd-c00f752a66d4.json')
      .then((response) => response.json())
      .then((json) => setData(getData(props.showDays)))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
    
  };

  const columnClick = (plot) => {
    plot.on('plot:click', (...args) => {
        const data = args[0].data?.data
        if (data === undefined)
            return;

        props.setDataOfTheDay(data);
        props.setIsDrawerVisible(true)
    });
  };

  const config = {
    data,
    xField: 'Date',
    yField: 'Utilization_Rate',
    xAxis: {
      label: {
        autoRotate: false,
      },
    },
    scrollbar: {
      type: 'horizontal',
    }
  };


  return <Column className='BarChart' {...config} onReady = {columnClick}/>;
};

export default BarChart;