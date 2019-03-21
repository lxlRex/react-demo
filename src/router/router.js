import AsyncComponent from './AsyncComponent.jsx'
import userRouter from './subRouter/userRouter.js'
import getSubRouter from './getSubRouter'


export default [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: AsyncComponent(() => import('@/pages/Home.jsx'))
  },
  {
    name: 'User',
    component: AsyncComponent(() => import('@/pages/Test.jsx')),
    routes: getSubRouter('/user', userRouter)
  }
]
