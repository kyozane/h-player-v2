const routes = [
  {
    path: '/import',
    component: () => import('layouts/Import'),
  },
  {
    path: '/',
    component: () => import('layouts/Home'),
    children: [
      { path: '', component: () => import('pages/VideoList') },
      { path: 'video', component: () => import('pages/Video') },
    ],
  },
  {
    path: '/mini-video',
    component: () => import('layouts/Mini'),
    children: [{ path: '', component: () => import('pages/MiniVideo') }],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404'),
  });
}

export default routes;
