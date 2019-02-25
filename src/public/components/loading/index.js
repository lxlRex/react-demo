import React from 'react'
import ReactDOM from 'react-dom'
import Loading from './src/loading.jsx'

const containerClassName = 'loading-container'

let instance = null

function createLoading () {
  let container = document.createElement('div')
  container.className = containerClassName
  document.body.appendChild(container)

  instance = ReactDOM.render(
    <Loading/>,
    document.querySelector(`.${containerClassName}`)
  )
}

export function showLoading () {
  if (!instance) createLoading()

  instance.setState({ show: true })
}

export function hideLoading () {
  instance && instance.setState({ show: false })
}

export { default } from './src/loading.jsx'
