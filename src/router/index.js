import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './router.js'

export default () => (
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>
)
