import AsyncComponent from './utils/AsyncComponent'
import getSubRouter from './utils/getSubRouter'
import RouterContainer from './utils/router-container'
import TabNav from '../pages/components/common/tabNav'

import userRouter from './subRouter/userRouter'
import indexRouter from './subRouter/indexRouter'

export default [
  {
    path: '/test',
    name: 'Test',
    component: AsyncComponent(() => import('../pages/home/Home'))
  },
  {
    name: 'Index',
    component: TabNav,
    exact: true,
    routes: getSubRouter(indexRouter, '/index')
  },
  {
    name: 'User',
    component: RouterContainer,
    routes: getSubRouter(userRouter, '/user')
  }
]
