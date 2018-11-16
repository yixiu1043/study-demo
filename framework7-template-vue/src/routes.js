export default [
  {
    path: '/',
    component: () => import("@/pages/find"),
  },
  {
    path: '/video/',
    component: () => import("@/pages/video"),
  },
  {
    path: '/mine/',
    component: () => import("@/pages/mine"),
  },
  {
    path: '/freind/',
    component: () => import("@/pages/freind"),
  },
  {
    path: '/account/',
    component: () => import("@/pages/account"),
  },
  {
    path: '/login/',
    component: () => import("@/pages/user/login"),
  },
  {
    path: '(.*)',
    component: () => import("@/pages/not-found"),
  },
];
