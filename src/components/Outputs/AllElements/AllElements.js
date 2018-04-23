import React from 'react';

import Paragraph from '../Paragraph';
import Blockquote from '../Blockquote';
import Header from '../Header';
import Ul from '../Ul';
import Ol from '../Ol';
import createLi from '../Li';
import Image from '../Image';
import Table from '../Table';

import createText from '../../functionalComponents/CreateText/CreateText';

const allElements = (elementsList, additionalElements) => {
  let items = [];

  let generateText = (min, max, addEl = additionalElements) => {

    return createText({
      units: 'sentences',
      sentenceLowerBound: min,
      sentenceUpperBound: max
    }, addEl);
  };

  let randomInteger = (min, max) => {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }

  let generateRandomKey = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  let createElement = (el, innerElements) => {
    let element;

    switch(el) {
      case 'h1' :
        element = <Header headerSize={el} text={generateText(2, 10, {})} key={generateRandomKey()} />;
        break;
      case 'h2' :
        element = <Header headerSize={el} text={generateText(2, 10, {})} key={generateRandomKey()} />;
        break;
      case 'h3' :
        element = <Header headerSize={el} text={generateText(2, 10, {})} key={generateRandomKey()} />;
        break;
      case 'h4' :
        element = <Header headerSize={el} text={generateText(2, 10, {})} key={generateRandomKey()} />;
        break;
      case 'h5' :
        element = <Header headerSize={el} text={generateText(2, 10, {})} key={generateRandomKey()} />;
        break;
      case 'h6' :
        element = <Header headerSize={el} text={generateText(2, 10, {})} key={generateRandomKey()} />;
        break;
      case 'paragraph':
        element = <Paragraph text={generateText(15, 70, innerElements)} key={generateRandomKey()} />
        break;
      case 'blockquote':
        element = <Blockquote text={generateText(15, 70, innerElements)} key={generateRandomKey()} />
        break;
      case 'image':
        element = <Image key={generateRandomKey()} width={randomInteger(400, 1920)}  height={randomInteger(150, 800)} />
        break;
      case 'ul':
        element = <Ul key={generateRandomKey()} items={createLi(undefined, innerElements)}/>
        break;
      case 'ol':
        element = <Ol key={generateRandomKey()} items={createLi(undefined, innerElements)}/>
        break;
      case 'table':
        element = <Table key={generateRandomKey()} tr={4} td={2} th="Yes"/>
        break;
      default:
        element = null;
    }

    return element;
  };

  let numberOfAddedEl = Object.keys(additionalElements); // Number of elements to be inserted
  let numberOfPlaceToInsert = 0; // Number of blocks where elements can be inserted

  elementsList.forEach((el) => {
    if (el === 'paragraph' || el === 'blockquote' || el === 'ul' || el === 'blockquote' || el === 'ol') {
      numberOfPlaceToInsert++;
    }
  });

  items = elementsList.map(el => {
    let insertElements = {};
    if (el === 'paragraph' || el === 'blockquote' || el === 'ul' || el === 'blockquote' || el === 'ol') {
      let i = Math.ceil((numberOfAddedEl.length) / numberOfPlaceToInsert);

      if (numberOfAddedEl.length) {
        while (i > 0) {
          let elPos = randomInteger(0, numberOfAddedEl.length - 1);
          insertElements[numberOfAddedEl[elPos]] = true;
          numberOfAddedEl.splice(elPos, 1);
          i--;
        }
      }
      numberOfPlaceToInsert--;
    }
    return createElement(el, insertElements);
  });

  return items;
}

export default allElements;
