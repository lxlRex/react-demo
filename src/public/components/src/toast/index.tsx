import React from 'react'
import ReactDOM from 'react-dom'
import Component from './src/toast'

interface ToastData {
  msg: string;
  delay?: number;
  callBack? (): any
}

const containerClassName = 'toast-container'

let instance: any = null
let queue: ToastData[] = []

function createToast () {
  let container = document.createElement('div')
  container.className = containerClassName
  document.body.appendChild(container)

  instance = ReactDOM.render(
    <Component/>,
    container
  )
}

function showToast ({msg, delay = 3000, callBack = () => {}}: ToastData) {
  if (!instance) createToast()

  if (instance.isShow()) {
    queue.push({msg, delay, callBack})
    return
  }

  instance.show(msg).then(() => {
    setTimeout(() => {
      instance.hide().then(() => {
        callBack()
        queue.length && showToast(queue.shift() as ToastData)
      })
    }, delay)
  })
}

export default class Toast {
  static show ({msg, delay = 3000}: ToastData): Promise<any> {
    return new Promise(resolve => {
      showToast({msg, delay, callBack: resolve})
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
