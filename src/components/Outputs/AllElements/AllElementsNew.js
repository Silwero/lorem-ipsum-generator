import React from 'react';

import Paragraph from '../Paragraph';
import Blockquote from '../Blockquote';
import Header from '../Header';
import Ul from '../Ul';
import Ol from '../Ol';
import createLi from '../Li';
import Image from '../Image';

import createText from '../../functionalComponents/CreateText/CreateText';

const allElements = (elementsList, additionalElements) => {
  let items = [];

  let newAdditionalElements = {
    ...additionalElements,
    isCreateAll: true
  }

  let generateText = (min, max, addEl = newAdditionalElements) => {

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

  let createElement = (el) => {
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
        element = <Paragraph text={generateText(15, 70)} key={generateRandomKey()} />
        break;
      case 'blockquote':
        element = <Blockquote text={generateText(15, 70)} key={generateRandomKey()} />
        break;
      case 'image':
        element = <Image key={generateRandomKey()} width={randomInteger(400, 1920)}  height={randomInteger(150, 800)} />
        break;
      case 'ul':
        element = <Ul key={generateRandomKey()} items={createLi(undefined, additionalElements)}/>
        break;
      case 'ol':
        element = <Ol key={generateRandomKey()} items={createLi(undefined, additionalElements)}/>
        break;
      default:
        element = null;
    }

    return element;
  };

  items = elementsList.map(el => {
    return createElement(el);
  });


  return items;
}

export default allElements;
