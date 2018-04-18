import React from 'react';

const select = (props) => {
  let options = props.elementsList.map(el => {
    return <option key={el} value={el}>{el}</option>;
  });

  return <div className={props.classList}>
    <label>{props.label}</label>
    <select className={props.elementType} onChange={props.change} value={props.val}>
      {options}
    </select>
  </div>
}

export default select;
