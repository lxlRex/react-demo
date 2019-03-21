import AsyncComponent from '../AsyncComponent.jsx'

export default [
  {
    path: '/login',
    name: 'User-Login',
    component: AsyncComponent(() => import('@/pages/user/login.tsx'))
  }
]
