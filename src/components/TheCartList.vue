<template>
  <article class="cart-list">
    <div
      class="cart-list__item"
      v-for="cartItem in cartItems"
      :key="cartItem.id"
    >
      <div
        class="cart-list__row cart-list__row--flex"
        v-if="cartItem.count > 0"
      >
        <div class="cart-list__col">
          <p class="cart-list__title">{{ cartItem.title }}</p>
          <p class="cart-list__price">
            {{ cartItem.price * cartItem.count }} kr
          </p>
        </div>
        <div class="cart-list__col cart-list__col--align-center">
          <span class="lnr lnr-chevron-up" @click="cartItem.count++"></span>
          <p class="cart-list__count">{{ cartItem.count }}</p>
          <span
            class="lnr lnr-chevron-down"
            @click="cartItem.count > 0 && cartItem.count--"
          ></span>
        </div>
      </div>
    </div>
    <div class="cart-list__item cart-list__item--fixed-bottom">
      <div class="cart-list__row cart-list__row--flex">
        <div class="cart-list__col">
          <p class="cart-list__total-text">Totalt</p>
          <p class="cart-list__order-information">inkl moms + drönarleverans</p>
        </div>
        <div class="cart-list__col">
          <p class="cart-list__total-price">
            {{ $store.getters.totalCartPrice }} kr
          </p>
        </div>
      </div>
      <div class="cart-list__row">
        <app-button
          label="Köp"
          :disabled="$store.getters.totalCartPrice === 0"
          :handleSubmit="submitOrder"
        />
      </div>
    </div>
  </article>
</template>

<script>
import store from "@/store";
import { computed } from "vue";
import { useRouter } from "vue-router";
import AppButton from "./ui/AppButton.vue";
import moment from "moment";
export default {
  components: { AppButton },
  name: "TheCartList",
  setup() {
    const router = useRouter();
    const cartItems = computed(() => store.state.cartItems);
    const submitOrder = () => {
      const order = {
        date: moment().format("YYYY/MM/DD"),
        price: cartItems.value.reduce(
          (sum, item) => sum + item.count * item.price,
          0
        ),
      };
      store.dispatch("CreateOrder", order).then(() => {
        store.commit("SET_LOADING");
        store.commit("TOGGLE_CART_MODAL");
        setTimeout(() => {
          router.push({ name: "OrderStatus" });
          store.commit("SET_LOADING");
        }, 1500);
      });
    };
    return {
      cartItems,
      submitOrder,
    };
  },
};
</script>
