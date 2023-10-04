import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';
import { getData } from '../util';


const paletteSemanticRed = '#F4664A';
const brandColor = '#5B8FF9';


const BarChart = (props) => {
  const [dataMap, setDataMap] = useState(null);

    useEffect(() => {
        asyncFetch();
    }, [props.showDays]);



  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/be63e0a2-d2be-4c45-97fd-c00f752a66d4.json')
      .then((response) => response.json())
      .then((json) => {
        const res = getData(props.showDays);
        setDataMap(res[1]);
        props.setData(res[0]);
        
      }).catch((error) => {
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
    data: props.data,
    xField: 'Date',
    yField: 'Utilization_Rate',
    xAxis: {
      label: {
        autoRotate: false,
      },
    },
    label: {
      content: (originData) => {
        const val = parseFloat(originData.Utilization_Rate);
        return (val * 100).toFixed(1) + '%';
      },
      offset: 10,
    },
    color: ({ Date }) => {
      if (dataMap.get(Date).Utilization_Rate < 0.4)
        return paletteSemanticRed;
      return brandColor;
    },
    scrollbar: {
      type: 'horizontal',
    }
  };

  //future step: show the loading page
  return( 
    dataMap === null || props.data === null ?
    null :
    <Column className='BarChart' {...config} onReady = {columnClick}/>
  );
};

export default BarChart;