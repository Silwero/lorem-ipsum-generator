import React from 'react';
import createText from '../functionalComponents/CreateText/CreateText';

const li = (item = {listItems: 5, minLength: 3, maxLength: 20}, additionalElements) => {
  let newListItems = [];

  let randomInteger = (min, max) => {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }

  let newAddEl = [];

  for (let prop in additionalElements) {
    if (additionalElements[prop]) {
      newAddEl.push(
        {
          name: prop,
          index: randomInteger(0, item.listItems -1)
        }
      )
    }
  }

  for (let i = 0; i < item.listItems; i++) {
    let setElements = {}

    newAddEl.forEach((el) => {
      if (i === el.index) {
        setElements[el.name] = true;
      }
    });

    let text = createText({
      units: 'sentences',
      sentenceLowerBound: item.minLength,
      sentenceUpperBound: item.maxLength
    }, setElements);
    newListItems.push(<li key={item.id + '-' + i}>{text}</li>);
  }

  return newListItems;
};

export default li;