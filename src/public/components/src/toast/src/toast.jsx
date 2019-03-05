import React from 'react'
import classNames from 'classnames'
import './toast.scss'

export default class Toast extends React.Component {
  state = {
    show: false,
    msg: ''
  }

  render () {
    return (
      <div className={classNames('c-toast', { 'c-toast--show': this.state.show })}>
        <div className="c-toast__text">{this.state.msg}</div>
      </div>
    )
  }
}
