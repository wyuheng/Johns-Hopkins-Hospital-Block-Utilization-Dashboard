import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { processDataToPie } from '../util';
import { Pie } from '@ant-design/plots';

const RingGraph = ({generalReport}) => {
  console.log("Pie");

  const config = {
    appendPadding: 10,
    data : processDataToPie(generalReport),
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.65,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          fontSize: '16px',
        },
        content: 'Block\n Utilization',
      },
    },
    color : ['#142f76', '#CCCCCC'],
  };
  return (
        <div className = "RingGraph">
            {generalReport === null ? null : <Pie {...config} />}
        </div>
    );
};

export default RingGraph;