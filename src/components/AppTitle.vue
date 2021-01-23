<template>
  <h1 class="title title--bold">{{ title }}</h1>
</template>

<script>
export default {
  name: "AppTitle",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>
