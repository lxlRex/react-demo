import React, { Component } from 'react'

export default ({title = 'react-demo', backgroundColor = '#fff'}) => (PageComponent: Component) => class Page extends Component {
  componentWillMount () {
    document.title = title
    document.body.style.background = backgroundColor
  }

  render () {
    return <PageComponent />
  }
}
