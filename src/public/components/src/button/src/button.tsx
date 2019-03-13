import React, { Component } from 'react'
import classNames from 'classnames'
import './button.scss'

interface IProps {
  disabled: boolean,
  onClick (): void
}

export default class Button extends Component<IProps> {
  clickHandler () {
    if (this.props.disabled) return
    this.props.onClick && this.props.onClick()
  }

  render () {
    return (
      <div className={classNames('c-button', { 'c-button--disabled': this.props.disabled })} onClick={this.clickHandler.bind(this)}>
        {this.props.children}
      </div>
    )
  }
}

(Button as any).defaultProps = {
  disabled: false
}
