import AsyncComponent from '../utils/AsyncComponent'

export default [
  {
    path: '/home',
    name: 'Index-Home',
    component: AsyncComponent(() => import('../../pages/index/home'))
  }
]
