import { lazy } from 'react';
import { RouteConfig } from 'react-router-config';
const Home = lazy(() => import('../views/Home'));
const Discovery = lazy(() => import('../views/Discovery'));
const Mvs = lazy(() => import('../views/Mvs'));
const PlayList = lazy(() => import('../views/PlayLists'));
const Songs = lazy(() => import('../views/Songs'));
const Test = lazy(() => import('../views/Test'));
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
        title: 'discovery',
      },
      {
        path: '/home/mvs',
        component: Mvs,
        title: 'mvs',
      },
      {
        path: '/home/playlists',
        component: PlayList,
        title: 'playlist',
      },
      {
        path: '/home/songs',
        component: Songs,
        title: 'songs',
      },
    ],
  },
  {
    path: '/test',
    component: Test,
    title: 'test',
  },
];

export default routes;
