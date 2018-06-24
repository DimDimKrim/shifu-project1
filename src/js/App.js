import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"

import Home from './Home.js';
import Admin from './Admin.js';

const list = [
  { id: 1, title: 'title1', content: 'content1', slug: 'slug1' },
  { id: 2, title: 'title2', content: 'content2', slug: 'slug2' },
  { id: 3, title: 'title3', content: 'content3', slug: 'slug3' },
  { id: 4, title: 'title4', content: 'content4', slug: 'slug4' },
  { id: 5, title: 'title5', content: 'content5', slug: 'slug5' },
  { id: 6, title: 'title6', content: 'content6', slug: 'slug6' },
  { id: 7, title: 'title7', content: 'content7', slug: 'slug7' },
  { id: 8, title: 'title8', content: 'content8', slug: 'slug8' },
  { id: 9, title: 'title9', content: 'content9', slug: 'slug9' },
  { id: 10, title: 'title10', content: 'content10', slug: 'slug10' },
];

export default function () {
  return (
    <div>
      <h1>Main Page</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home name={'Home, '} />
          </Route>
          <Route exact path="/admin">
            <Admin posts={list} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}