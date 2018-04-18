import React from 'react';

const input = (props) => {
  const blurHandler = (e) => {
    if (!e.target.value || e.target.value === '0') {
      e.target.value = 1;
    }
  }

  return <div className="item-input">
    <label>{props.label}</label>
    <input className={props.typeClass} onChange={props.change} onBlur={(e) => blurHandler(e)} type={props.type} value={props.val} placeholder={props.placeholder}/>
  </div>
};

export default input;