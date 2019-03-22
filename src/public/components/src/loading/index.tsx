import React from 'react'
import ReactDOM from 'react-dom'
import Component from './src/loading'

const containerClassName = 'loading-container'

let instance: any

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

    instance.setState({ show: true })
  }

  static hide () {
    instance && instance.setState({ show: false })
  }
}
