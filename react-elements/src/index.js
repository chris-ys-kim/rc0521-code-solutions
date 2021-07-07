import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement('h1', null, 'Hello, React!');
const root = document.querySelector('#root');

ReactDOM.render(element, root);
