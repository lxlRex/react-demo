import React, { Component } from 'react'
import className from 'classnames'
import './home.scss'

export default class Testtsx extends Component {
  clickHandler () {
    console.log(1111)
  }

  render () {
    let arr: number[] = [1, 2, 3, 4]
    return (
      <div onClick={this.clickHandler.bind(this)}>
        { arr.map(item => <div className={className('testtsx', {'qwer': item === 1})} key={item}>{item}</div>) }
      </div>
    )
  }
}
