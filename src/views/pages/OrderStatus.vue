<template>
  <div
    class="container__content container__content--bg-orange px-25 container__content--text-center"
  >
    <p class="container__text-sm py-50">
      Ordernummer
      <span class="container__text-sm--bold">#{{ orderStatus.orderNr }}</span>
    </p>
    <img
      class="container__image container__image--size-lg"
      :src="require('@/assets/graphics/drone.svg')"
      alt=""
    />
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

    if (localStorage.getItem("order_info"))
      orderStatus.value = JSON.parse(localStorage.getItem("order_info"));

    const redirect = () => {
      store.commit("SET_LOADING");
      setTimeout(() => {
        store.commit("SET_LOADING");
        router.push({ name: "Menu" });
        localStorage.removeItem("order_info");
      }, 1500);
    };
    return {
      redirect,
      orderStatus,
    };
  },
};
</script>
