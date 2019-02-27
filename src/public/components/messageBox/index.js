import React from 'react'
import ReactDOM from 'react-dom'
import Component from './src/messageBox.jsx'

let instance = {
  alert: null,
  confirm: null
}

function createMessageBox ({ type }) {
  let containerClassName = `${type}-container`
  let container = document.createElement('div')
  container.className = containerClassName
  document.body.appendChild(container)

  instance[type] = ReactDOM.render(
    <Component type={type}/>,
    document.querySelector(`.${containerClassName}`)
  )
}

export default class MessageBox {
  static alert ({ msg, btnText }) {
    return new Promise(resolve => {
      let type = 'alert'

      if (!instance[type]) createMessageBox({ type })
      instance[type].setState({ show: true, msg, confirmBtn: btnText, confirm: resolve })
    })
  }

  static confirm ({ msg, confirmBtn, cancelBtn }) {
    return new Promise((resolve, reject) => {
      let type = 'confirm'

      if (!instance[type]) createMessageBox({ type })
      instance[type].setState({ show: true, msg, confirmBtn, cancelBtn, confirm: resolve, cancel: reject })
    })
  }
}
