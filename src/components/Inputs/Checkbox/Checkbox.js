import React from 'react';
import './Checkbox.css';

const checkbox = (props) => (
  <div className="checkbox">
    <input type="checkbox" disabled={props.isImage} id={props.id} checked={props.checked} onChange={(e) => props.change(e)}/>
    <label htmlFor={props.id}>{props.label}</label>
  </div>
);

export default checkbox;