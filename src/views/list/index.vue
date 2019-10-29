<template>
  <el-main style="display: flex; flex-direction: column;">
    <el-row
      :gutter="16"
      style="flex: 1 0 auto;"
    >
      <el-col
        v-for="good of goods"
        :key="good.id"
        :span="6"
      >
        <el-card>
          <div slot="header">
            <strong>{{ good.name }}</strong>
          </div>
          <p>{{ good.price }}</p>
          <p>Count: {{ cartMap.get(good.id) || 0 }}</p>
          <el-button-group>
            <el-button
              @click="handleCickAdd({
                id: good.id,
                name: good.name,
                price: good.price
              })"
              size="small"
            >
              Add
            </el-button>
            <el-button
              v-if="cartMap.get(good.id)"
              @click="handleCickMinus({ id: good.id })"
              size="small"
            >
              Minus
            </el-button>
          </el-button-group>
        </el-card>
      </el-col>
    </el-row>
    <el-row
      type="flex"
      justify="center"
      align="center"
    >
      <el-pagination
        :current-page="current"
        :page-size="size"
        :page-sizes="[8, 12, 16, 20, 24]"
        :total="totalCount"
        @current-change="handleChangeCurrent"
        @size-change="handleChangeSize"
        layout="total, sizes, prev, pager, next, jumper"
      />
    </el-row>
  </el-main>
</template>

<script>
export default {
  data () {
    return {
      current: 1,
      size: 8,
      totalCount: 0
    }
  },
  computed: {
    goods () {
      return this.$store.getters.goods
    },
    cartMap () {
      return this.$store.getters.cartMap
    }
  },
  mounted () {
    this.handleGetData()
  },
  methods: {
    handleGetData () {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      this.$store.dispatch('getGoodsAsync', {
        current: this.current,
        size: this.size
      }).then(({ suc, msg, data }) => {
        if (suc) {
          this.$notify({
            title: 'Success',
            message: 'Get goods successfully.',
            type: 'success'
          })
          this.totalCount = data.paging.totalCount
        } else {
          this.$notify({
            title: 'Error',
            message: msg,
            type: 'error'
          })
        }
        loading.close()
      })
    },
    handleCickAdd ({ id, name, price }) {
      this.$store.commit('setCart', { type: 'add', id, name, price })
    },
    handleCickMinus ({ id }) {
      this.$store.commit('setCart', { type: 'minus', id })
    },
    handleChangeSize (size) {
      this.size = size
      this.handleGetData()
    },
    handleChangeCurrent (current) {
      this.current = current
      this.handleGetData()
    }
  }
}
</script>

<style lang="scss" scoped>
.el-col {
  padding-top: 8px;
  padding-bottom: 8px;
}
</style>
