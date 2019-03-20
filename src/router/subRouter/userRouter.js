import AsyncComponent from '../AsyncComponent.jsx'

export default [
  {
    path: '/qwe',
    name: 'Test-test',
    component: AsyncComponent(() => import('@/pages/Home.jsx'))
  }
]
