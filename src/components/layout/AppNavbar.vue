<template>
  <nav class="navbar pa-20">
    <div class="navbar__burger">
      <div class="navbar__burger-line"></div>
      <div class="navbar__burger-line"></div>
      <div class="navbar__burger-line"></div>
    </div>
    <div class="navbar__cart">
      <div
        class="navbar__cart-counter"
        v-if="hasCartItems"
        :class="{
          'animate__animated animate__fadeIn animate__faster': animationActive,
        }"
      >
        <span>{{ hasCartItems }}</span>
      </div>
      <span class="lnr lnr-cart"></span>
    </div>
  </nav>
</template>

<script>
import store from "@/store";
import { computed } from "vue";
export default {
  name: "AppNavbar",
  setup() {
    const hasCartItems = computed(() => store.state.cartItems.length);
    const animationActive = computed(() => store.state.isActive);

    return { hasCartItems, animationActive };
  },
};
</script>
