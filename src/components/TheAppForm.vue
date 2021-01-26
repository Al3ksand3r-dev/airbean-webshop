<template>
  <div class="form bg-white pa-10">
    <img
      :src="require('@/assets/graphics/airbean-logo.svg')"
      alt="airbean-landing"
      class="form__logo py-20"
    />
    <app-title
      title="Välkommen till Airbean-familjen!"
      class="title--color-brown"
    />
    <p class="form__text-sm py-20">
      Genom att skapa ett konto nedan kan du spara och se din orderhistorik.
    </p>
    <form class="form__element" @submit.prevent="register">
      <div class="form__element__row">
        <div class="form__element__col">
          <label for="Name" class="form__element__label">Namn</label>
          <input
            type="text"
            id="Name"
            v-model="name"
            class="form__element__input-text"
          />
        </div>
      </div>
      <div class="form__element__row">
        <div class="form__element__col">
          <label for="Email" class="form__element__label">Epost</label>
          <input
            type="text"
            id="Email"
            v-model="email"
            class="form__element__input-text"
          />
        </div>
      </div>
      <div class="form__element__row">
        <div class="form__element__col">
          <label
            for="GDPR"
            class="form__element__label form__element__label--flex"
          >
            <input
              type="radio"
              @change="gdpr = !gdpr"
              id="GDPR"
              class="form__element__input-radio"
            />
            <span class="form__element__text--sm px-5">GDPR Ok!</span>
          </label>
        </div>
      </div>
      <div class="form__element__row">
        <app-button label="Registrera" :disabled="!isForm" />
      </div>
    </form>
  </div>
</template>

<script>
import AppTitle from "@/components/AppTitle";
import { computed, reactive, toRefs } from "vue";
import AppButton from "./ui/AppButton.vue";
import { useStore } from "vuex";
export default {
  name: "TheAppForm",
  components: { AppTitle, AppButton },
  setup() {
    const store = useStore();

    const input = reactive({
      name: "",
      email: "",
      gdpr: false,
    });

    const isForm = computed(() => {
      return !!input.name && !!input.email && !!input.gdpr;
    });

    const register = () => {
      store.commit("SET_LOADING");
      setTimeout(() => {
        location.reload();
        localStorage.setItem(
          "user",
          JSON.stringify({ name: input.name, email: input.email })
        );
        store.commit("SET_LOADING");
      }, 1500);
    };

    return {
      ...toRefs(input),
      register,
      isForm,
    };
  },
};
</script>
