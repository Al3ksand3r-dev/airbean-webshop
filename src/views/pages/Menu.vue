<template>
  <div class="container__content container__content--bg-pink">
    <graphics-top />
    <Title title="Meny" />
    <the-menu-list />
    <graphics-bottom />
  </div>
</template>

<script>
import Title from "@/components/AppTitle";
import TheMenuList from "../../components/TheMenuList.vue";
import GraphicsTop from "../../components/layout/GraphicsTop.vue";
import GraphicsBottom from "../../components/layout/GraphicsBottom.vue";
export default {
  name: "Home",
  components: {
    Title,
    TheMenuList,
    GraphicsTop,
    GraphicsBottom,
  },
};
</script>
