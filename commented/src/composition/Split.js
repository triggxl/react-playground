import React from 'react';
// importing split styling
import './Split.css';

// creating custom Split component
const Split = (props) => {
  // reading props of 'split' class and className passed as props to children
  const combinedClassName = `split ${props.className}`
  // ?variable for inline styling used in App.js
  const newStyles = { flex: props.flexBasis };
  return (
    <div 
      className={combinedClassName} 
      style={newStyles}>
      {props.children}
    </div>
  );
}

// to use in other parts of our application
export default Split;

/* 
make a custom 'Split' component
https://courses.thinkful.com/react-v1/checkpoint/6
*/