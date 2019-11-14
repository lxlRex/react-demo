import AsyncComponent from '../utils/AsyncComponent';
export default [
    {
        path: '/index/home',
        name: 'Index-Home',
        component: AsyncComponent(() => import('../../pages/index/home'))
    },
    {
        path: '/index/classify',
        name: 'Index-Classify',
        component: AsyncComponent(() => import('../../pages/index/classify'))
    }
];
