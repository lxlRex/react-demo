import React, { Component, ComponentClass } from 'react'

// export default ({title = 'react-demo', backgroundColor = '#fff'}) => <T extends new(...args: any[]) => {}>(PageComponent: T) => class Page extends Component<any, any> {
//   componentWillMount () {
//     document.title = title
//     document.body.style.background = backgroundColor
//   }
// }

export default ({title = 'react-demo', backgroundColor = '#fff'}) => {
  return (PageComponent: ComponentClass<any, any>) => {
    return class extends Component<any, any> {
      componentWillMount () {
        document.title = title
        document.body.style.background = backgroundColor
      }

      render () {
        return <PageComponent />
      }
    }
  }
}
