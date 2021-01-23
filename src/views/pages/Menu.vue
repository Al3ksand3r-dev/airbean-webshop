<template>
  <div class="container">
    <div class="container__content container__content--bg-pink">
      <graphics-top />
      <Title title="Meny" />
      <the-menu-list />
      <graphics-bottom />
    </div>
  </div>
</template>

<script>
import Title from "@/components/AppTitle";
import GraphicsTop from "@/components/layout/GraphicsTop.vue";
import GraphicsBottom from "../../components/layout/GraphicsBottom.vue";
import TheMenuList from "../../components/TheMenuList.vue";
export default {
  name: "Home",
  components: {
    Title,
    GraphicsTop,
    GraphicsBottom,
    TheMenuList,
  },
};
</script>
