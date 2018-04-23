import React from 'react';

import createText from '../functionalComponents/CreateText/CreateText';

const table = (props) => {
  let th;
  let td = [];

  let createCols = (El, min, max) => {
    let cols = [];
    for (let i = 0; i < props.td; i++) {
      cols.push(<El key={i}>{createText({
        sentenceLowerBound: min,
        sentenceUpperBound: max
      })}</El>)
    }

    return cols;
  }

  if (props.th === 'Yes') {
    th = <thead><tr>{createCols('th', 3, 8)}</tr></thead>;
  }

  for (let i = 0; i < props.tr; i++) {
    td.push(<tr key={i}>{createCols('td', 3, 25)}</tr>);
  }

  return <table>
    <caption>Table caption</caption>
    {th}
    <tbody>
      {td}
    </tbody>
  </table>
};

export default table;