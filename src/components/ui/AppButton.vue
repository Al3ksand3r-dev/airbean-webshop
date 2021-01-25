<template>
  <button
    class="app-btn"
    :disabled="disabled"
    @click="handleSubmit"
    :style="[
      disabled
        ? { backgroundColor: '#ccc', cursor: 'initial' }
        : { backgroundColor: bgColor },
    ]"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    handleSubmit: {
      type: Function,
      required: true,
    },
    label: {
      type: String,
      default: "Submit",
    },
    bgColor: {
      type: String,
      default: "#2f2926",
    },
  },
};
</script>
