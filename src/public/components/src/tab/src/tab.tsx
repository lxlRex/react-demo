import React, { Component } from 'react';

export default class Tab extends Component<{children: any}> {
  render() {
    return (
      <ul className="c-tab">
        { this.props.children }
      </ul>
    )
  }
}
