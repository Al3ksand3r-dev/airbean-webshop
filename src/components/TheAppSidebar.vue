<template>
  <aside class="sidebar" v-show="$store.state.isSidebar">
    <ul class="sidebar__list">
      <li class="sidebar__list-item" v-for="link in links" :key="link.name">
        <router-link
          class="sidebar__list-link"
          :to="{
            name: link.name,
          }"
          @click="$store.commit('TOGGLE_SIDEBAR')"
          >{{ link.label }}</router-link
        >
      </li>
    </ul>
  </aside>
</template>

<script>
import { ref } from "vue";
export default {
  name: "TheAppSidebar",
  setup() {
    const links = ref([
      {
        name: "Home",
        label: "Hem",
      },
      {
        name: "Menu",
        label: "Meny",
      },
      {
        name: "Profile",
        label: "Profil",
      },
    ]);
    return {
      links,
    };
  },
};
</script>
