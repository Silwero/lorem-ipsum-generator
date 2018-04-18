import React from 'react';

const header = (props) => {

  let header = <h2>{props.text}</h2>;
  switch(props.headerSize) {
    case 'h1':
      header = <h1>{props.text}</h1>
      break;
    case 'h2':
      header = <h2>{props.text}</h2>
      break;
    case 'h3':
      header = <h3>{props.text}</h3>
      break;
    case 'h4':
      header = <h4>{props.text}</h4>
      break;
    case 'h5':
      header = <h5>{props.text}</h5>
      break;
    case 'h6':
      header = <h6>{props.text}</h6>
      break;
    default:
      return <h2>{'Wrong header size. Must be h1 - h6'}</h2>;
  }

  return header;
};

export default header;