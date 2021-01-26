import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/styles/main.scss";
import "animate.css";

const injectOrders = () => {
  if (localStorage.getItem("orders")) {
    store.commit("SET_ORDERS", JSON.parse(localStorage.getItem("orders")));
  }
};

createApp(App)
  .use(store)
  .use(router)
  .use(injectOrders)
  .mount("#app");
