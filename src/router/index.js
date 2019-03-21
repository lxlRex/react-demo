import React from 'react'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './router'

export default () => (
  <HashRouter>
    {renderRoutes(routes)}
  </HashRouter>
)
