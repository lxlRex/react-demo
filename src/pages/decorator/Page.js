import React, { Component } from 'react'

export default title => PageComponent => class Page extends Component {
  componentWillMount () {
    document.title = title
  }

  render () {
    return <PageComponent />
  }
}
