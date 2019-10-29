<template>
  <el-main style="display: flex; flex-direction: column;">
    <el-card v-for="good in cart" :key="good.id">
      <div slot="header">
        <strong>{{ good.name }}</strong>
      </div>
      <p>{{ good.price }}</p>
      <p>Count: {{ cartMap.get(good.id) }}</p>
      <p>Total Price: {{ good.price.slice(1) * cartMap.get(good.id) }}</p>
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
    <p v-if="cart.length === 0">No goods picked.</p>
  </el-main>
</template>

<script>
export default {
  computed: {
    cart () {
      return this.$store.getters.cart
    },
    cartMap () {
      return this.$store.getters.cartMap
    }
  }
}
</script>
