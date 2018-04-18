import React from 'react';
import './mark.css';

const highlight = (props) => (
  <div className="mark-item">
    <label title={props.title} className={props.isActive ? 'active' : null} onClick={props.change}>{props.label}</label>
  </div>
);

export default highlight;