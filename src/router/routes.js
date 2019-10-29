import Layout from '@/layout'

export default [
  {
    path: '/',
    redirect: { name: 'login' }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/list',
    component: Layout,
    children: [
      {
        path: '',
        name: 'list',
        component: () => import('@/views/list')
      }
    ]
  },
  {
    path: '/cart',
    component: Layout,
    children: [
      {
        path: '',
        name: 'cart',
        component: () => import('@/views/cart')
      }
    ]
  }
]
