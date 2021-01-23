<template>
  <div class="container">
    <app-navbar />
    <router-view />
  </div>
</template>

<script>
import AppNavbar from "./components/layout/AppNavbar.vue";
export default {
  components: { AppNavbar },
  name: "App",
};
</script>

<style lang="scss" scoped></style>
