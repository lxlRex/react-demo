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
  static show (msg: string, delay = 3000): Promise<any> {
    return new Promise(resolve => {
      if (!instance) createToast()

      if (instance.isShow()) return

      instance.show(msg).then(() => {
        setTimeout(() => {
          instance.hide().then(resolve)
        }, delay)
      })

    })
  }

  static destory () {
    let container: HTMLElement = document.querySelector(containerClassName) as HTMLElement

    if (instance || container) {
      instance = null

      ReactDOM.unmountComponentAtNode(container)
      container.parentNode && container.parentNode.removeChild(container)
    }
  }
}
