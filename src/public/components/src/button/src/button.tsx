import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './button.scss'

interface IProps {
  disabled: boolean,
  onClick?: () => void
}

export default class Button extends Component<IProps> {
  static propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func
  }

  static defaultProps = {
    disabled: false
  }

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
