import { computed } from "vue";
export const isRegistered = computed(() => !!localStorage.getItem("user"));
