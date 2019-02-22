import React from 'react'
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
    console.log(arguments)
    this.props.onChange && this.props.onChange(e.target.value)
  }

  focusHandler () {
    this.setState({ isFocus: true })
  }

  blurHandler () {
    this.setState({ isFocus: false })
  }

  clearHandler () {
    this.props.onChange && this.props.onChange('')
  }

  shouldComponetUpdate () {
    return false
  }

  render () {
    return (
      <div className="c-input">
        <input className="c-input__entity" type={this.props.type} value={this.props.value}
          onChange={this.changeHandler.bind(this, event)}
          onFocus={this.focusHandler.bind(this)}
          onBlur={this.blurHandler.bind(this)}
        />
        { (this.props.value.length > 0 && this.state.isFocus) && <div className="c-input__clear" onClick={this.clearHandler.bind(this)}></div> }
      </div>
    )
  }
}
