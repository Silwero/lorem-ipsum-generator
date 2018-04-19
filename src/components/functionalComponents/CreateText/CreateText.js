import React from 'react';
const loremIpsum = require('lorem-ipsum');

const createText = (conf, additionalEl = {}) => {
  let result = loremIpsum(conf);
  const elementTextLength = {
    units: 'sentences',
    sentenceLowerBound: 1,
    sentenceUpperBound: 5
  }

  let additionalElements = {
    ...additionalEl
  }

  let randomInteger = (min, max) => {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand * rand;
  }

  if (additionalElements.isCreateAll) {
    for (let prop in additionalElements) {
      additionalElements[prop] = randomInteger(0, 1);
    }
    console.log(additionalElements);
  }

  let insertElement = (string, element, revertSpace) => {
    let splitString = string;
    if (typeof string === 'string') {
      splitString = string.split(' ').map((el) => {
        return el + ' ';
      });
    }
    const positionToInsert = randomInteger(0, splitString.length);

    if (revertSpace) { // remove space before and add after for <sub> and <sup>
      splitString.splice(positionToInsert, 0, ['lorem', element]);
      if (splitString[positionToInsert + 1] && typeof splitString[positionToInsert + 1] === 'string') {
         splitString[positionToInsert + 1] = ' ' + splitString[positionToInsert + 1];
      }
    } else {
      splitString.splice(positionToInsert, 0, element);
    }

    return splitString;
  }

  if (additionalElements.sup) {
    let element = <sup key="sup">sup </sup>
    result = insertElement(result, element, true);
  }

  if (additionalElements.sub) {
    let element = <sub key="sub">sup </sub>
    result = insertElement(result, element, true);
  }

  if (additionalElements.strong) {
    let element = <strong key="strong">{loremIpsum(elementTextLength).toLowerCase().replace(/\./gi, '')} </strong>
    result = insertElement(result, element);
  }

  if (additionalElements.abbr) {
    let element = <abbr title="Abbreviation" key="abbr">{loremIpsum(elementTextLength).toLowerCase().replace(/\./gi, '')} </abbr>
    result = insertElement(result, element);
  }

  if (additionalElements.a) {
    let element = <a href="http://example.com" key="a">{loremIpsum(elementTextLength).toLowerCase().replace(/\./gi, '')} </a>
    result = insertElement(result, element);
  }

  if (additionalElements.em) {
    let element = <em key="em">{loremIpsum(elementTextLength).toLowerCase().replace(/\./gi, '')} </em>
    result = insertElement(result, element);
  }

  if (additionalElements.b) {
    let element = <b key="b">{loremIpsum(elementTextLength).toLowerCase().replace(/\./gi, '')} </b>
    result = insertElement(result, element);
  }

  if (additionalElements.i) {
    let element = <i key="i">{loremIpsum(elementTextLength).toLowerCase().replace(/\./gi, '')} </i>
    result = insertElement(result, element);
  }

  return result;
};

export default createText;