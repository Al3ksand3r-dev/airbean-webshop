<template>
  <div class="loader" :class="{ 'set-loader': $store.state.isLoading }">
    <div class="loader__circle">
      <div class="loader__inner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppLoader",
};
</script>
