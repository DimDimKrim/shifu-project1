import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"

import Home from './Home.js';
import Admin from './Admin.js';

const list = JSON.parse(localStorage.getItem("posts"));


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