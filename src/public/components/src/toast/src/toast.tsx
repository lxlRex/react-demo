import React from 'react'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
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
      <CSSTransition
        in={this.state.show}
        classNames={'fade'}
        timeout={300}
        unmountOnExit>
        <div className={classNames('c-toast')}>
          <div className="c-toast__text">{this.state.msg}</div>
        </div>
      </CSSTransition>
    )
  }
}
