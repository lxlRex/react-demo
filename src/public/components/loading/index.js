import React from 'react'
import ReactDOM from 'react-dom'
import Loading from './src/loading.jsx'

const containerClassName = 'loading-container'

let instance = null

function creatLoading () {
  let container = document.createElement('div')
  container.className = containerClassName
  document.body.appendChild(container)

  instance = ReactDOM.render(
    <Loading/>,
    document.querySelector(`.${containerClassName}`)
  )
  console.log(instance)
}

export function show () {
  if (!instance) creatLoading()

  instance.setState({ show: true })
}

export function hide () {
  instance && instance.setState({ show: false })
}

export { default } from './src/loading.jsx'
