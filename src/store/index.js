import Vue from 'vue'
import Vuex from 'vuex'
import getGoods from '@/mock/goods'
import getToken from '@/mock/token'

const goods = getGoods()

Vue.use(Vuex)

// check https://segmentfault.com/a/1190000002789651 first

export default new Vuex.Store({
  state: {
    token: '',
    goods: [],
    cart: [],
    cartMap: new Map()
  },
  getters: {
    token: state => state.token,
    goods: state => state.goods,
    cart: state => state.cart,
    cartMap: state => state.cartMap
  },
  mutations: {
    setToken (state, { token }) {
      state.token = token
    },
    setGoods (state, { goods }) {
      // state = { ...state, goods } // incorrect
      state.goods = goods
    },
    setCart (state, { type, id, name, price }) {
      let count = state.cartMap.get(id)
      if (type === 'add') {
        if (count === undefined) {
          state.cart.push({
            id,
            name,
            price
          })
          state.cartMap.set(id, 1)
        } else {
          state.cartMap.set(id, count + 1)
        }
      } else if (type === 'minus') {
        if (count !== undefined && count !== 0) {
          if (count === 1) {
            for (let i = 0; i < state.cart.length; i += 1) {
              if (state.cart[i].id === id) {
                state.cart.splice(i, 1)
              }
              break
            }
            state.cartMap.delete(id)
          } else {
            state.cartMap.set(id, count - 1)
          }
        }
      }
      state.cartMap = new Map(Array.from(state.cartMap))
    }
  },
  actions: {
    loginAsync ({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            suc: true,
            msg: '',
            token: getToken()
          })
        }, 1000)
      }).then((res) => {
        if (res.suc) {
          commit('setToken', { token: res.token })
        }
        return res
      })
    },
    getGoodsAsync ({ commit }, { current, size }) {
      const totalCount = goods.length
      const totalPage = Math.ceil(totalCount / size)
      let goodsTmp = []
      if (totalPage >= current) {
        // the requested data is within the boundary
        const start = (current - 1) * size
        goodsTmp = [...goods.slice(start, start + size)]
      }
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            suc: true,
            msg: '',
            data: {
              goods: goodsTmp,
              paging: {
                current,
                totalCount,
                totalPage,
                size
              }
            }
          })
        }, 1800)
      }).then((res) => {
        if (res.suc) {
          commit('setGoods', { goods: res.data.goods })
        }
        return res
      })
    }
  }
})
