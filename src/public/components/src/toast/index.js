import React from 'react'
import ReactDOM from 'react-dom'
import Component from './src/toast.jsx'

const containerClassName = 'toast-container'

let instance = null

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
  static show (msg, delay = 3000) {
    return new Promise(resolve => {
      if (!instance) createToast()

      instance.setState({ show: true, msg })
      setTimeout(() => {
        instance.setState({ show: false })
        resolve()
      }, 3000)
    })
  }
}
