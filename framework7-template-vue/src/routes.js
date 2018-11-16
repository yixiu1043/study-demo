export default [
  {
    name: "find",
    path: '/',
    id: 'find',
    component: () => import("@/pages/find"),
  },
  {
    name: "video",
    path: '/video/',
    id: 'video',
    component: () => import("@/pages/video"),
  },
  {
    name: "mine",
    path: '/mine/',
    id: 'mine',
    component: () => import("@/pages/mine"),
  },
  {
    name: "freind",
    path: '/freind/',
    id: 'freind',
    component: () => import("@/pages/freind"),
  },
  {
    name: "account",
    path: '/account/',
    id: 'account',
    component: () => import("@/pages/account"),
  },
  {
    name: "login",
    path: '/login/',
    component: () => import("@/pages/user/login"),
  },
  {
    path: '(.*)',
    component: () => import("@/pages/not-found"),
  },
];
