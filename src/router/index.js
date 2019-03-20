import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import router from './router'

const qwe = (router) => {
  return router.map(({path, name, exact = false, component, children = []}) => {
    if (children.length > 0) {
      return (
        <Route exact={exact} path={path} key={name} component={component}>
          qwe(children)
        </Route>
      )
    } else {
      return <Route exact={exact} path={path} key={name} component={component}/>
    }
  })
}

const getRouter = () => (
  <Router>
    <div>
      <Switch>
        {
          // router.map(({path, name, exact, component}) => {
          //   return <Route exact={exact} path={path} key={name} component={component}/>
          // })
          qwe(router)
        }
      </Switch>
    </div>
  </Router>
)

export default getRouter
