<template>
  <div class="container">
    <app-loader />
    <app-navbar />
    <router-view />
  </div>
</template>

<script>
import AppNavbar from "./components/layout/AppNavbar.vue";
import AppLoader from "./components/ui/AppLoader.vue";
export default {
  components: { AppNavbar, AppLoader },
  name: "App",
};
</script>

<style lang="scss" scoped></style>
