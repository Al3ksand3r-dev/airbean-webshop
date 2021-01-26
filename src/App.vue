<template>
  <div class="container">
    <app-loader />
    <app-navbar />
    <the-app-sidebar />
    <router-view />
  </div>
</template>

<script>
import AppNavbar from "./components/layout/AppNavbar.vue";
import TheAppSidebar from "./components/TheAppSidebar.vue";
import AppLoader from "./components/ui/AppLoader.vue";
export default {
  components: { AppNavbar, AppLoader, TheAppSidebar },
  name: "App",
};
</script>
