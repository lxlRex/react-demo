import React, { Component } from 'react'
import './index.scss'

interface IProps {
  limit?: number
  value: number
}

export default class extends Component<IProps> {
  render () {
    const { value } = this.props

    return (
      <div className={'process-bar'}>
        <span className={'process-bar__text'}>{value}%</span>
        <div className={'process-bar__content'} style={{width: `${value}%`}} />
      </div>
    )
  }
}