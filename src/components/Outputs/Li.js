import React from 'react';
import createText from '../functionalComponents/CreateText/CreateText';

const li = (item = {listItems: 5, minLength: 3, maxLength: 20}, additionalElements) => {
  let newListItems = [];

  for (let i = 0; i < item.listItems; i++) {
    let text = createText({
      units: 'sentences',
      sentenceLowerBound: item.minLength,
      sentenceUpperBound: item.maxLength
    }, additionalElements);
    newListItems.push(<li key={item.id + '-' + i}>{text}</li>);
  }

  return newListItems;
};

export default li;