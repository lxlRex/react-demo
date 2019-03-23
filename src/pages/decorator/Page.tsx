import React from 'react'

// export default ({title = 'react-demo', backgroundColor = '#fff'}) => <T extends new(...args: any[]) => {}>(PageComponent: T) => class Page extends Component<any, any> {
//   componentWillMount () {
//     document.title = title
//     document.body.style.background = backgroundColor
//   }
// }

export default function ({title = 'react-demo', backgroundColor = '#fff'}) {
  return <T extends new(...args: any[]) => {}> (PageComponent: T) => {
    return class extends PageComponent {
      componentWillMount () {
        document.title = title
        document.body.style.background = backgroundColor
      }
    }
  }
}
