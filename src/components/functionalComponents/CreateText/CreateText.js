import React from 'react';
const loremIpsum = require('lorem-ipsum');

const createText = (conf, additionalElements = {}) => {
  let result = loremIpsum(conf);
  const elementTextLength = {
    units: 'sentences',
    sentenceLowerBound: 1,
    sentenceUpperBound: 5
  }

  console.log(conf);

  let randomInteger = (min, max) => {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
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

  for (let el in additionalElements) {
    if (additionalElements[el]) {
      let TagName = el;
      let element;
      if (el === 'sup' || el === 'sub') {
        element = <TagName key={el}>{el} </TagName>;
        result = insertElement(result, element, true);
      } else {
        switch(el) {
          case 'a':
            element = <a href="http://example.com" key={el}>{loremIpsum(elementTextLength).toLowerCase().replace(/\./gi, '')} </a>;
            break;
          case 'abbr':
            element = <abbr title="Abbreviation" key={el}>{loremIpsum({units: 'sentences', sentenceLowerBound: 1, sentenceUpperBound: 1}).toLowerCase().replace(/\./gi, '')} </abbr>;
            break;
          default:
            element = <TagName key={el}>{loremIpsum(elementTextLength).toLowerCase().replace(/\./gi, '')} </TagName> ;
        }
        result = insertElement(result, element);
      }
    }
  }

  return result;
};

export default createText;