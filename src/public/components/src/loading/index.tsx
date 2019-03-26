import React from 'react'
import ReactDOM from 'react-dom'
import debounce from 'lodash/debounce'
import Component from './src/loading'

const containerClassName = 'loading-container'

let instance: any
let count = 0

function createLoading () {
  let container = document.createElement('div')
  container.className = containerClassName
  document.body.appendChild(container)

  instance = ReactDOM.render(
    <Component/>,
    document.querySelector(`.${containerClassName}`)
  )
}

export default class Loading {
  static show () {
    if (!instance) createLoading()

    count++

    if (instance.state.show) return
    instance.setState({ show: true })
  }

  static close () {
    if (!count) return
    count--
    instance && debounce(() => instance.setState({ show: false }), 300)()
  }
}
