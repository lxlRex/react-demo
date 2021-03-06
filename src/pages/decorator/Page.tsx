import React from 'react'
import { User } from '../../public/class'

// export default ({title = 'react-demo', backgroundColor = '#fff'}) => <T extends new(...args: any[]) => {}>(PageComponent: T) => class Page extends Component<any, any> {
//   componentWillMount () {
//     document.title = title
//     document.body.style.background = backgroundColor
//   }
// }

export default ({title = 'react-demo', backgroundColor = '#fff', needLogin = true}) => {
  return <C extends React.ComponentClass>(PageComponent: C): C => {
    const Component = PageComponent as React.ComponentClass
    return class extends React.Component<any> {
      componentWillMount () {
        if (needLogin && !User.isLogin()) {
          this.props.history.push(`/user/login?backUrl=${location.href}`)
          return
        }

        document.title = title
        document.body.style.background = backgroundColor
      }

      render () {
        return <Component {...this.props} />
      }
    } as C
  }
}
