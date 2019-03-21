import AsyncComponent from '../AsyncComponent.tsx'

export default [
  {
    path: '/login',
    name: 'User-Login',
    component: AsyncComponent(() => import('@/pages/user/login.tsx'))
  }
]
