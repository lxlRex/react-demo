import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes, RouteConfig } from 'react-router-config'
import routes from './router'

const supportsHistory = 'pushState' in window.history

const getConfirmation = (message: string, callback: Function) => {
  const allowTransition = window.confirm(message);
  callback(allowTransition);
}

export default () => (
  <BrowserRouter forceRefresh={!supportsHistory} getUserConfirmation={getConfirmation}>
    { renderRoutes(routes as RouteConfig[]) }
  </BrowserRouter>
)
