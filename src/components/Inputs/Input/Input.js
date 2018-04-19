import React from 'react';

const input = (props) => {

  return <div className="item-input">
    <label>{props.label}</label>
    <input disabled={props.disabled} className={props.typeClass} onChange={props.change} type={props.type} value={props.val} placeholder={props.placeholder}/>
  </div>
};

export default input;