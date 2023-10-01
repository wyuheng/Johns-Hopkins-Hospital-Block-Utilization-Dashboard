import React from 'react';
import { Divider } from 'antd';

const TextDivider = (props) => (
  <>
    
    <Divider orientation="left" orientationMargin={50}> Surgery {props.index + 1} </Divider>
    <p>
      This is a short testing message
    </p>
    <Divider />
    <p>
      This is a short testing message
    </p>
    <Divider />
  </>
);
export default TextDivider;