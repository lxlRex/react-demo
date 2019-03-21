import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'

export default class Test extends Component {
  render () {
    console.log(this.props.route.routes)
    return (
      <div>
        {renderRoutes(this.props.route.routes)}
        <div>this is test~asdasda1111123213</div>
      </div>
    )
  }
}

