import React from 'react';

import './AdditionalElementsInputContainer.css';

import Checkbox from '../../components/Inputs/Checkbox/Checkbox';

const additionalElementsInputContainer = (props) => {
  let elements = [];

  for (let key in props.elements) {
    elements.push(key);
  }

  let changeHandler = (e) => {
    props.change(e.target.id.replace(/-checkbox/, ''));
  }

  elements = elements.map((el) => {
    return <Checkbox isImage={props.isImage} change={changeHandler} checked={props.elements[el]} key={el} label={'<' + el + '>'} id={el + '-checkbox'} />
  });

  return <div className="additional-elements">
    <p>Selecting each item will increase the size of the text</p>
    <div className="button-wrapper">
      <button className="button" onClick={props.check}>Check All</button>
      <button className="button" onClick={props.uncheck}>Uncheck All</button>
    </div>
    {elements}
  </div>
};

export default additionalElementsInputContainer;