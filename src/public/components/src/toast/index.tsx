import React from 'react'
import ReactDOM from 'react-dom'
import Component from './src/toast'

const containerClassName = 'toast-container'

let instance: any = null

function createToast () {
  let container = document.createElement('div')
  container.className = containerClassName
  document.body.appendChild(container)

  instance = ReactDOM.render(
    <Component/>,
    document.querySelector(`.${containerClassName}`)
  )
}

export default class Toast {
  static show (msg: string, delay = 3000) {
    return new Promise(resolve => {
      if (!instance) createToast()

      if (instance.state.show) return

      instance.setState({ show: true, msg })
      setTimeout(() => {
        instance.setState({ show: false })
        resolve()
      }, delay)
    })
  }

  static close () {

  }
}
