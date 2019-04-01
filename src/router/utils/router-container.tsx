import React from 'react'
import { renderRoutes } from 'react-router-config'

// interface IProps {
//   route: any
// }
//
// export default class extends Component<IProps> {
//   render () {
//     const { route: {routes} } = this.props
//     console.log(routes)
//     return (
//       <>
//         {renderRoutes(routes)}
//       </>
//     )
//   }
// }

export default ({ routes }: { routes: any }) => <>{renderRoutes(routes)}</>
