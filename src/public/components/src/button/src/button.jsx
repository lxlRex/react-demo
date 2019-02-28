import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './button.scss'

export default class Button extends Component {
  clickHandler () {
    if (this.props.disabled) return
    this.props.onClick && this.props.onClick()
  }

  getClassName () {
    return `c-button${this.props.disabled ? ' c-button--disabled' : ''}`
  }

  render () {
    return (
      <div className={this.getClassName()} onClick={this.clickHandler.bind(this)}>
        {this.props.children}
      </div>
    )
  }
}

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

Button.defaultProps = {
  disabled: false
}
