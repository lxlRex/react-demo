import React from 'react'
import PropTypes from 'prop-types'
import './input.scss'

export default class Input extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      clearShow: false,
      isFocus: false
    }
  }

  changeHandler (e) {
    this.props.onChange && this.props.onChange(e.target.value)
  }

  focusHandler () {
    this.setState({ isFocus: true })
  }

  blurHandler () {
    setTimeout(() => {
      this.setState({ isFocus: false })
    }, 0)
  }

  clearHandler () {
    this.props.value && this.props.onChange && this.props.onChange('')
  }

  clearIcon () {
    return this.props.showClear && this.props.value.length > 0 && this.state.isFocus ? '' : 'c-input__clear--hide'
  }

  render () {
    return (
      <div className="c-input">
        { this.props.label && <div className="c-input__left">{this.props.label}</div> }
        <div className="c-input__right">
          <input className="c-input__entity"
            type={this.props.type}
            value={this.props.value}
            placeholder={this.props.placeholder}
            onFocus={this.focusHandler.bind(this)}
            onBlur={this.blurHandler.bind(this)}
            onChange={this.changeHandler.bind(this, event)}
          />
          { this.props.showClear && <div className={`c-input__clear ${this.clearIcon()}`} onClick={this.clearHandler.bind(this)}/> }
        </div>
      </div>
    )
  }
}

Input.propTypes = {
  showClear: PropTypes.bool,
  type: (props, propName, componentName) => {
    if (['text', 'number', 'tel', 'password'].indexOf(props[propName]) < 0) {
      return new Error('Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.')
    }
  },
  placeholder: PropTypes.string
}

Input.defaultProps = {
  showClear: false,
  type: 'text',
  placeholder: '请输入'
}
