<template>
  <div class="container">
    <div class="container__content container__content--bg-brown">
      <graphics-top />
      <the-app-order-history v-if="isRegistered" />
      <the-app-form v-else />
    </div>
  </div>
</template>

<script>
import GraphicsTop from "../../components/layout/GraphicsTop.vue";
import TheAppForm from "../../components/TheAppForm.vue";
import TheAppOrderHistory from "../../components/TheAppOrderHistory.vue";
import { isRegistered } from "@/use/IsRegistered.js";
export default {
  components: { TheAppForm, GraphicsTop, TheAppOrderHistory },
  name: "Signup",
  setup() {
    return { isRegistered };
  },
};
</script>
