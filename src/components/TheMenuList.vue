<template>
  <div class="menu-list">
    <div
      class="menu-list__item menu-list__item--flex"
      v-for="menuItem in menuList"
      :key="menuItem.id"
    >
      <div class="menu-list__item__row mr-20">
        <span class="lnr lnr-plus-circle menu-list__item-btn-add"></span>
      </div>
      <div class="menu-list__item__row menu-list__item__row--direction-col">
        <h1 class="menu-list__item-title">{{ menuItem.title }}</h1>
        <p class="menu-list__item-description">{{ menuItem.desc }}</p>
      </div>
      <div
        class="menu-list__item__row menu-list__item__row--far-right menu-list__item__row--align-start"
      >
        <p class="menu-list__item-price">{{ menuItem.price }} kr</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import store from "@/store";
export default {
  name: "TheMenuList",
  setup() {
    const menuList = ref([]);
    store.dispatch("FetchMenuList").then(() => {
      menuList.value = store.state.menuList;
    });
    return {
      menuList,
    };
  },
};
</script>
