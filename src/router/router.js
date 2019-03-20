import AsyncComponent from './AsyncComponent.jsx'
import userRouter from './subRouter/userRouter.js'

export default [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: AsyncComponent(() => import('@/pages/Home.jsx'))
  },
  {
    path: '/test',
    name: 'Test',
    exact: false,
    component: AsyncComponent(() => import('@/pages/Home.jsx')),
    children: userRouter
  }
]
