import React from 'react'

export default class Select extends React.Component {
  changeHandler (e) {
    this.props.onChange && this.props.onChange(e.target.value)
  }

  render () {
    return (
      <select onChange={this.changeHandler.bind(this)}>
        { this.props.children }
      </select>
    )
  }
}
