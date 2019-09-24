import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './app/pages/main'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
