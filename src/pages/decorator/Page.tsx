import React from 'react'

// export default ({title = 'react-demo', backgroundColor = '#fff'}) => <T extends new(...args: any[]) => {}>(PageComponent: T) => class Page extends Component<any, any> {
//   componentWillMount () {
//     document.title = title
//     document.body.style.background = backgroundColor
//   }
// }

export default ({title = 'react-demo', backgroundColor = '#fff'}) => {
  return <C extends React.ComponentClass>(PageComponent: C): C => {
    const Component = PageComponent as React.ComponentClass
    return class extends React.Component {
      componentWillMount () {
        document.title = title
        document.body.style.background = backgroundColor
      }

      render () {
        return <Component {...this.props} />
      }
    } as C
  }
}
