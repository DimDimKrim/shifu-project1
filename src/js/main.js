import React from 'react';
import ReactDOM from 'react-dom';


import App from './App';
import list from '../data/list.json'
const {posts} = list
localStorage.setItem('posts', JSON.stringify(posts));

ReactDOM.render(
  <App />,
  document.getElementById('root')
);