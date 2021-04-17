import React from 'react'
import { Router, Switch } from 'react-router-dom'

import { history } from '../helpers'
import { Home, Power, DMList } from '../containers'
import { PublicRoute } from '.'

export const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <PublicRoute path='/' exact component={Home} />
        <PublicRoute path='/power' component={Power} />
        <PublicRoute path='/dm-list' component={DMList} />
        <PublicRoute path='*' component={Home} />
      </Switch>
    </Router>
  )
}
