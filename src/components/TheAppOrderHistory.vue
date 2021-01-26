<template>
  <div class="container__content container__content--text-center p-top-120">
    <img
      :src="require('@/assets/graphics/portrait.svg')"
      alt="portrait"
      class="container__image container--size-md"
    />
    <h1 class="container__text-lg bold">{{ user.name }}</h1>
    <h2 class="container__text-sm py-5">{{ user.email }}</h2>
    <div class="order-list px-20">
      <div class="order-list__row">
        <div class="order-list__col">
          <h3 class="container__text-md text-align-left">Orderhistorik</h3>
        </div>
      </div>
      <div
        class="order-list__row border-bottom border-bottom-dark flex h-space-between"
        v-for="(order, idx) in orders"
        :key="idx"
      >
        <div class="order-list__col">
          <p class="order-list__orderNr bold text-uppercase">
            #{{ order.orderNr }}
          </p>
          <p class="order-list__total-text">total ordersumma</p>
        </div>
        <div class="order-list__col order-list__col--text-right">
          <p class="order-list__date">{{ order.date }}</p>
          <p class="order-list__total-price">{{ order.price }} kr</p>
        </div>
      </div>
      <div class="order-list__row flex h-space-between">
        <div class="order-list__col">
          <p class="order-list__total-text">Totalt spenderat</p>
        </div>
        <div class="order-list__col">
          <p class="order-list__total-price bold">
            {{ getTotalOrderAmount }} kr
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "TheAppOrderHistory",
  setup() {
    const store = useStore();
    const orders = ref([]);
    const user = ref({});

    if (localStorage.getItem("user") && store.state.orders.length > 0) {
      user.value = JSON.parse(localStorage.getItem("user"));
      orders.value = store.state.orders;
    }

    const getTotalOrderAmount = computed(() => {
      return orders.value.reduce((sum, item) => (sum = sum + item.price), 0);
    });

    return {
      orders,
      user,
      getTotalOrderAmount,
    };
  },
};
</script>
