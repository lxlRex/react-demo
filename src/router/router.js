import AsyncComponent from './utils/AsyncComponent';
import RouterContainer from './utils/router-container';
import TabNav from '../pages/components/common/tabNav';
import userRouter from './subRouter/userRouter';
import indexRouter from './subRouter/indexRouter';
export default [
    {
        path: '/',
        exact: true,
        component: AsyncComponent(() => import('../pages/home/Home'))
    },
    {
        path: '/index',
        component: TabNav,
        routes: indexRouter
    },
    {
        path: '/user',
        component: RouterContainer,
        routes: userRouter
    }
];
