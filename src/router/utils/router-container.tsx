import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'

interface IProps {
  route: any
}

export default class extends Component<IProps> {
  render () {
    const { route: {routes} } = this.props
    return (
      <>
        {renderRoutes(routes)}
      </>
    )
  }
}