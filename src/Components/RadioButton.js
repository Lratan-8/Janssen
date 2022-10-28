import { Radio } from 'antd';
import React from 'react';

const RadioButton = (props) => {



  return(
  <>
    <Radio.Group onChange={props.onChange}>

      {props.options.map((option)=>{

        return <Radio.Button key={option} style={{marginRight: '10px'}} value={option} >{option}</Radio.Button>


      })}
     
    </Radio.Group>
    
  </>)
};
export default RadioButton;