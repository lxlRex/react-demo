import AsyncComponent from '../utils/AsyncComponent'

export default [
  {
    path: '/home',
    name: 'Index-Home',
    component: AsyncComponent(() => import('../../pages/index/home'))
  },
  {
    path: '/classify',
    name: 'Index-Classify',
    component: AsyncComponent(() => import('../../pages/index/classify'))
  }
]
