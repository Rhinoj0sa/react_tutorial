import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));


// array of items
const arr = ['Super popular JS library', 'will help me be ever more employable', 'Pretty cool logo',
   'More shit', 'more more', 'Item 6'];

/** render an unordered list with 3 items inside */
root.render(
  <ol>
    {arr.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ol>
);
