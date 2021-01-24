<template>
  <div class="cart" :class="{ 'cart--open': $store.state.openCartModal }">
    <h1 class="cart__title">Din beställning</h1>
    <the-cart-list />
  </div>
</template>

<script>
import TheCartList from "./TheCartList.vue";
export default {
  components: { TheCartList },
  name: "TheCartMenu",
};
</script>
