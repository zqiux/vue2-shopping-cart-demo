import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const createRouter = () => new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({
    y: 0
  }),
  routes
})

const router = createRouter()

export default router
