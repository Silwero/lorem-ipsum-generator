import React from 'react';

const image = (props) => {
  return (
    <img src={'http://placehold.it/' + props.width + 'x' + props.height } alt={props.altText}/>
  )
};

export default image;