import AsyncComponent from '../utils/AsyncComponent'

export default [
  {
    path: '/login',
    name: 'User-Login',
    component: AsyncComponent(() => import('../../pages/user/login'))
  }
]
