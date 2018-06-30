import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"

import Home from './components/Home.jsx';
import Admin from './components/Admin.jsx';
import Add from './components/Add.jsx';
import Edit from './components/Edit.jsx';

export default function () {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route exact path="/admin/add">
            <Add />
          </Route>
          <Route exact path="/admin/edit/:slug">
            <Edit />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}