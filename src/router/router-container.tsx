import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'

export default class extends Component {
  render () {
    // @ts-ignore
    const { route: {routes} } = this.props
    return (
      <>
        {renderRoutes(routes)}
      </>
    )
  }
}
