import React from 'react'
import classNames from 'classnames'
import './toast.scss'

export default class Toast extends React.Component {
  state = {
    show: false,
    msg: ''
  }

  isShow () {
    return this.state.show
  }

  show (msg: string): Promise<any> {
    return new Promise(resolve => {
      this.setState({ show: true, msg }, resolve)
    })
  }

  hide (): Promise<any> {
    return new Promise(resolve => {
      this.setState({show: false}, resolve)
    })
  }

  render () {
    return (
      <div className={classNames('c-toast', { 'c-toast--show': this.state.show })}>
        <div className="c-toast__text">{this.state.msg}</div>
      </div>
    )
  }
}
