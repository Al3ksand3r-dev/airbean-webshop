<template>
  <nav class="navbar pa-20" v-show="$route.name !== 'OrderStatus'">
    <div class="navbar__burger" @click="$store.commit('TOGGLE_SIDEBAR')">
      <div class="navbar__burger-line"></div>
      <div class="navbar__burger-line"></div>
      <div class="navbar__burger-line"></div>
    </div>
    <the-cart-menu />
    <div
      class="navbar__cart"
      @click="$store.commit('TOGGLE_CART_MODAL')"
      v-if="$route.name !== 'Profile'"
    >
      <div
        class="navbar__cart-counter"
        v-if="cartItems.length && $store.getters.totalCartPrice > 0"
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
