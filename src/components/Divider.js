import React from 'react';
import { Divider } from 'antd';
import { calculateTime } from '../dataGenerate';

const TextDivider = (props) => {
  
  return (
  <>
  
    <Divider orientation="left" orientationMargin={50}> Surgery {props.index + 1} </Divider>
    <h3>
      Case Time Frame: {calculateTime(props.surgery[1][0])} - {calculateTime(props.surgery[1][1])}
    </h3>
    <Divider />
    <p>
      <h3> Patient: {props.surgery[3]} </h3>
    </p>
    <Divider />
  </>
)};
export default TextDivider;