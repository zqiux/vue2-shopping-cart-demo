import nprogress from 'nprogress'
import router from '@/router'
import store from '@/store'
import '@u/nprogress.scss'

router.beforeEach((to, from, next) => {
  nprogress.start()
  if (store.getters.token) {
    if (to.name === 'login') {
      next({ name: 'list' })
    } else {
      next()
    }
  } else {
    if (to.name === 'login') {
      next()
    } else {
      next({ name: 'login' })
    }
  }
})

router.afterEach(() => {
  nprogress.done()
})
