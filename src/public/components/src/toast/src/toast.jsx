import React from 'react'
import './toast.scss'

export default class Toast extends React.Component {
  state = {
    show: false,
    msg: ''
  }

  getClassname () {
    return `c-toast ${this.state.show ? ' c-toast--show' : ''}`
  }

  render () {
    return (
      <div className={this.getClassname()}>
        <div className="c-toast__text">{this.state.msg}</div>
      </div>
    )
  }
}
