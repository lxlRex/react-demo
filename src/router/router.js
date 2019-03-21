import AsyncComponent from './AsyncComponent.tsx'
import getSubRouter from './getSubRouter.ts'
import RouterContainer from './router-container.tsx'

import userRouter from './subRouter/userRouter.js'

export default [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: AsyncComponent(() => import('../pages/home/Home.jsx'))
  },
  {
    name: 'User',
    component: RouterContainer,
    routes: getSubRouter('/user', userRouter)
  }
]
