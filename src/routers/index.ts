import { lazy } from 'react';
import { RouteConfig } from 'react-router-config';
const Home = lazy(() => import('../views/Home'));
const Discovery = lazy(() => import('../views/Discovery'));
const Mvs = lazy(() => import('../views/Mvs'));
const PlayList = lazy(() => import('../views/PlayLists'));
const Songs = lazy(() => import('../views/Songs'));
const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    routes: [
      {
        path: '/home/discovery',
        component: Discovery,
      },
      {
        path: '/home/mvs',
        component: Mvs,
      },
      {
        path: '/home/playlist',
        component: PlayList,
      },
      {
        path: '/home/songs',
        component: Songs,
      },
    ],
  },
];

export default routes;
