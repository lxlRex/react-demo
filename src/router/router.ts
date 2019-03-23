import AsyncComponent from './utils/AsyncComponent'
import getSubRouter from './utils/getSubRouter'
import RouterContainer from './utils/router-container'

import userRouter from './subRouter/userRouter'

export default [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: AsyncComponent(() => import('../pages/home/Home'))
  },
  {
    name: 'User',
    component: RouterContainer,
    routes: getSubRouter('/user', userRouter)
  }
]
