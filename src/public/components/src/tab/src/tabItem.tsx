import React, { Component } from 'react'
import classNames from 'classnames'

export default class TabItem extends Component<{active: boolean}> {
  render() {
    return (
      <li className={classNames({'active': this.props.active})}>
        { this.props.children }
      </li>
    )
  }
}
