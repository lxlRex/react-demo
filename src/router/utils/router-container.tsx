import React from 'react'
import { renderRoutes, RouteConfig } from 'react-router-config'

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

export default ({ route: {routes} }: { route: { routes: RouteConfig[] } }) => <>{renderRoutes(routes)}</>
