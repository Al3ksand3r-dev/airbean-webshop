<template>
  <div
    class="container__content container__content--bg-orange px-25 container__content--text-center"
  >
    <p class="container__text-sm py-50">
      Ordernumber
      <span class="container__text-sm--bold">#{{ orderStatus.orderNr }}</span>
    </p>
    <img class="drone" :src="require('@/assets/graphics/drone.svg')" alt="" />
    <app-title
      title="Din beställning är på väg!"
      class="title--color-white p-top-40"
    />
    <p class="container__text-md container__text-md--bold py-40">
      {{ orderStatus.eta }}<span class="container__text-md"> minuter</span>
    </p>
    <app-button
      label="Gå vidare"
      class="app-btn--bottom"
      :handleSubmit="redirect"
    />
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import AppTitle from "../../components/AppTitle.vue";
import AppButton from "../../components/ui/AppButton.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  components: { AppTitle, AppButton },
  name: "Home",
  setup() {
    const router = useRouter();
    const store = useStore();
    const orderStatus = ref({});
    axios.get("/api/order").then(({ data }) => {
      orderStatus.value = data;
      console.log(orderStatus.value);
    });
    const redirect = () => {
      store.commit("SET_LOADING");
      setTimeout(() => {
        store.commit("SET_LOADING");
        router.push({ name: "Menu" });
      }, 1500);
    };
    return {
      redirect,
      orderStatus,
    };
  },
};
</script>
