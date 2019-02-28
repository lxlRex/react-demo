import React from 'react'
import PropTypes from 'prop-types'
import './mask.scss'
import uuid from '../../../utils/uuid'

export default class Mask extends React.Component {

  clickHandler () {
    this.props.maskClick && this.props.maskClick()
  }

  touchmoveHandler (e) {
    if (!this.props.scroll) e.preventDefault()
  }

  getClassName () {
    return `c-mask${this.props.display ? ' c-mask--display' : ''}${this.props.show ? '' : ' c-mask--hide'}`
  }

  render () {
    return (
      <div className={this.getClassName()}
        ref={mask => { this.mask = mask }}
        onClick={this.clickHandler.bind(this)}
      >
        {this.props.children}
      </div>
    )
  }

  componentDidMount () {
    this.mask.addEventListener('touchmove', this.touchmoveHandler.bind(this), { passive: false })
  }

  componentWillUnmount () {
    this.mask.removeEventListener('touchmove', this.touchmoveHandler.bind(this))
  }
}

Mask.propTypes = {
  show: PropTypes.bool,
  display: PropTypes.bool,
  scroll: PropTypes.bool,
  maskClick: PropTypes.func
}

Mask.defaultProps = {
  show: false,
  display: true,
  scroll: false
}
