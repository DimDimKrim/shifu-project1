import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import posts from '../data/list.json';
import Routers from './router.jsx';

if (!localStorage.getItem('posts')) {
  localStorage.setItem('posts', posts);
}

ReactDOM.render(
  <Routers />,
  document.getElementById('root')
);