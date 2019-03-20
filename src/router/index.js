import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import AsyncComponent from './AsyncComponent.jsx'
const Home = AsyncComponent(() => import('@/pages/Home.jsx'))
const Test = AsyncComponent(() => import('@/pages/Test.jsx'))

const getRouter = () => (
  <Router>
    <div>
      <Link to="/Test">新闻</Link>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/Test' component={Test}/>
      </Switch>
    </div>
  </Router>
)

export default getRouter
