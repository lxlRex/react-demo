import React from 'react'
import noop from 'lodash/noop'
import Mask from '../../mask/index'
import './messageBox.scss'

export enum Types {alert, confirm}

interface IProps {
  type: Types
}

export default class MessageBox extends React.Component<IProps> {
  static defaultProps = {
    type: Types.alert
  }

  state = {
    show: true,
    msg: 'alert',
    cancelBtn: '取消',
    confirmBtn: '确定',
    confirm: noop,
    cancel: noop
  }

  cancelHandler () {
    this.closehandler()
    this.state.cancel()
  }

  confirmHandler () {
    this.closehandler()
    this.state.confirm()
  }

  closehandler () {
    this.setState({ show: false })
  }

  render () {
    return (
      <Mask show={this.state.show}>
        <div className="message-box">
          <div className="message-box__msg">{this.state.msg}</div>
          <div className="message-box__btnBox">
            { this.props.type === Types.confirm && <div className="message-box__btn message-box__btn--cancel" onClick={this.cancelHandler.bind(this)}>{this.state.cancelBtn}</div> }
            <div className="message-box__btn" onClick={this.confirmHandler.bind(this)}>{this.state.confirmBtn}</div>
          </div>
        </div>
      </Mask>
    )
  }
}
