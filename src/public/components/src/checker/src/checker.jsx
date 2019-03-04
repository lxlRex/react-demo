import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './checker.scss'

export default class Checker extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: props.value
    }
  }

  clickHandler () {
    this.setState({ checked: !this.state.checked })
    this.props.onChange && this.props.onChange(!this.state.checked)
  }

  render () {
    return (
      <div className="c-checker">
        <div className={classNames('c-checker__normal', { 'c-checker__normal--checked': this.state.checked })} onClick={this.clickHandler.bind(this)}/>
        <div className="c-checker__text">
          { this.props.children }
        </div>
      </div>
    )
  }
}

Checker.propTypes = {
  value: PropTypes.bool
}

Checker.defaultProps = {
  value: false
}
