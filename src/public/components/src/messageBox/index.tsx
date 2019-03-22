import React from 'react'
import ReactDOM from 'react-dom'
import Component from './src/messageBox'

// interface Type {
//   type: 'alert' | 'confirm'
// }
enum Type {alert = 'alert', confirm = 'confirm'}

let instance: {
  alert: any;
  confirm: any;
} = {
  alert: null,
  confirm: null
}

function createMessageBox ({ type }: { type: Type }) {
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
  /**
   * @desc alert
   * @param {string} msg message
   * @param {string} btnText button text
   * @return {Promise<any>}
   */
  static alert ({ msg, btnText }: {msg: string; btnText: string}) {
    return new Promise(resolve => {
      let type = Type.alert

      if (!instance[type]) createMessageBox({ type })
      instance[type].setState({ show: true, msg, confirmBtn: btnText, confirm: resolve })
    })
  }

  static confirm ({ msg, confirmBtn, cancelBtn }: {msg: string; confirmBtn: string; cancelBtn: string}) {
    return new Promise((resolve, reject) => {
      let type = Type.confirm

      if (!instance[type]) createMessageBox({ type })
      instance[type].setState({ show: true, msg, confirmBtn, cancelBtn, confirm: resolve, cancel: reject })
    })
  }
}
