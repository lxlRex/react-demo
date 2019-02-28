import React from 'react'
import noop from 'lodash/noop'
import Mask from '../../mask'
import './messageBox.scss'

export default class MessageBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: true,
      msg: 'alert',
      cancelBtn: '取消',
      confirmBtn: '确定',
      confirm: noop,
      cancel: noop
    }
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
      <Mask show={this.state.show} display>
        <div className="message-box">
          <div className="message-box__msg">{this.state.msg}</div>
          <div className="message-box__btnBox">
            { this.props.type === 'confirm' && <div className="message-box__btn message-box__btn--cancel" onClick={this.cancelHandler.bind(this)}>{this.state.cancelBtn}</div> }
            <div className="message-box__btn" onClick={this.confirmHandler.bind(this)}>{this.state.confirmBtn}</div>
          </div>
        </div>
      </Mask>
    )
  }
}

MessageBox.propTypes = {
  type: (props, propName, componentName) => {
    if (['alert', 'confirm'].indexOf(props[propName]) < 0) {
      return new Error('Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.')
    }
  }
}

MessageBox.defaultProps = {
  type: 'alert'
}
