import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import List from './app/pages/list-season-leasted'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={List} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
