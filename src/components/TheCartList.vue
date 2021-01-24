<template>
  <article class="cart-list">
    <div
      class="cart-list__item"
      v-for="cartItem in cartItems"
      :key="cartItem.id"
    >
      <div class="cart-list__row">
        <div class="cart-list__col">
          <p class="cart-list__name"></p>
          <p class="cart-list__price"></p>
        </div>
      </div>
      <div class="cart-list__row">
        <div class="cart-list__col"></div>
      </div>
    </div>
  </article>
</template>

<script>
import store from "@/store";
import { computed } from "vue";
export default {
  name: "TheCartList",
  setup() {
    const cartItems = computed(() => store.state.cartItems);
    return {
      cartItems,
    };
  },
};
</script>

<style lang="scss" scoped></style>
