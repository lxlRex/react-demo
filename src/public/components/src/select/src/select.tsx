import React from 'react'

interface IProps {
  onChange (value: string | number): void
}


export default class Select extends React.Component<IProps> {
  changeHandler (e: any) {
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
