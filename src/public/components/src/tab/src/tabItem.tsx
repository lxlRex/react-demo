import React, { Component } from 'react'

export default class TabItem extends Component {
  render() {
    return (
      <li>
        { this.props.children }
      </li>
    )
  }
}
