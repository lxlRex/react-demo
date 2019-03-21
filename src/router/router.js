import AsyncComponent from './AsyncComponent.jsx'
import getSubRouter from './getSubRouter'
import RouterContainer from './router-container.tsx'

import userRouter from './subRouter/userRouter.js'


export default [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: AsyncComponent(() => import('@/pages/home/Home.jsx'))
  },
  {
    name: 'User',
    component: RouterContainer,
    routes: getSubRouter('/user', userRouter)
  }
]
