import AsyncComponent from '../utils/AsyncComponent'

export default [
  {
    path: '/user/login',
    name: 'User-Login',
    component: AsyncComponent(() => import('../../pages/user/login'))
  }
]
