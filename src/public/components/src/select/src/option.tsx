import React from 'react'

interface IProps {
  value: string | number
  label: string
}

export default class Option extends React.Component<IProps> {
  render () {
    return (
      <option value={ this.props.value }>{this.props.label}</option>
    )
  }
}
