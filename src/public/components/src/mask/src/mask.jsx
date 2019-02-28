import React from 'react'
import PropTypes from 'prop-types'
import './mask.scss'

export default class Mask extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

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
        onClick={this.clickHandler.bind(this)}
        onTouchMove={this.touchmoveHandler.bind(this)}>
        {this.props.children}
      </div>
    )
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
