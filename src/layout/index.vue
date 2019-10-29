<template>
  <el-container>
    <el-header>
      <a
        class="link"
        href="https://github.com/ModyQyW/vue2-shopping-cart-demo"
      >
        vue2-shopping-cart-demo
      </a>
      <el-button
        v-show="isRouteList"
        @click="handleClickCheckCart"
        size="small"
      >
        <i class="el-icon-goods" />
      </el-button>
      <el-button
        v-show="!isRouteList"
        @click="handleClickCheckList"
        size="small"
      >
        <i class="el-icon-menu" />
      </el-button>
    </el-header>
    <transition
      name="el-fade-in-linear"
      mode="out-in"
    >
      <keep-alive>
        <router-view :key="this.routeName" />
      </keep-alive>
    </transition>
    <el-footer>
      By ModyQyW. MIT License.
    </el-footer>
  </el-container>
</template>

<script>
export default {
  computed: {
    routeName () {
      return this.$route.name
    },
    isRouteList () {
      return this.routeName === 'list'
    }
  },
  methods: {
    handleClickCheckCart () {
      this.$router.push({ name: 'cart' })
    },
    handleClickCheckList () {
      this.$router.push({ name: 'list' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@modyqyw/css-styles/web/vars";

.el-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid $borderColor;

  & > .link {
    font-size: 20px;
    line-height: 28px;
    color: $adBlue6;
  }
}

.el-main {
  min-height: calc(100vh - 120px);
}

.el-footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 20px;
}
</style>
