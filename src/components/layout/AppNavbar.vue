<template>
  <nav class="navbar pa-20">
    <the-cart-menu />
    <div class="navbar__burger">
      <div class="navbar__burger-line"></div>
      <div class="navbar__burger-line"></div>
      <div class="navbar__burger-line"></div>
    </div>
    <div class="navbar__cart" @click="$store.commit('TOGGLE_CART_MODAL')">
      <div
        class="navbar__cart-counter"
        v-if="cartItems.length"
        :class="{
          'animate__animated animate__fadeIn animate__faster': animationActive,
        }"
      >
        <span>{{ counter }}</span>
      </div>
      <span class="lnr lnr-cart"></span>
    </div>
  </nav>
</template>

<script>
import store from "@/store";
import { computed } from "vue";
import TheCartMenu from "../TheCartMenu.vue";
export default {
  components: { TheCartMenu },
  name: "AppNavbar",
  setup() {
    const cartItems = computed(() => store.state.cartItems);
    const animationActive = computed(() => store.state.isActive);

    const counter = computed(() => {
      return cartItems.value.reduce((sum, item) => (sum += item.count), 0);
    });

    return { cartItems, animationActive, counter };
  },
};
</script>
