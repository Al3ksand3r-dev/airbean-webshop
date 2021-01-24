<template>
  <div class="cart">
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
