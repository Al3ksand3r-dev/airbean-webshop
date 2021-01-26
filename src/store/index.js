import { createStore } from "vuex";
import { getMenuList, createOrder } from "@/services/MenuServices";
import { isRegistered } from "@/use/IsRegistered.js";

export default createStore({
  state: {
    count: 1,
    orders: [],
    menuList: [],
    cartItems: [],
    isActive: false,
    isSidebar: false,
    isLoading: false,
    openCartModal: false,
  },
  mutations: {
    SET_MENU_LIST(state, menuList) {
      state.menuList = menuList;
    },
    ADD_CART_ITEM(state, item = {}) {
      if (Object.keys(item).length === 0) {
        state.cartItems = [];
        console.log(state.cartItems);
        return;
      }
      const newItem = Object.assign({ count: state.count }, item);
      const itemExist = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (itemExist && Object.keys(item).length === 0) {
        itemExist.count++;
        return;
      }
      state.cartItems.push(newItem);
      console.log(state.cartItems);
    },
    TOGGLE_CART_ANIMATION(state) {
      state.isActive = !state.isActive;
      setTimeout(() => {
        state.isActive = !state.isActive;
      }, 500);
    },
    TOGGLE_CART_MODAL(state) {
      state.openCartModal = !state.openCartModal;
    },
    SET_LOADING(state) {
      state.isLoading = !state.isLoading;
    },
    SET_ORDERS(state, orders) {
      state.orders = orders;
    },
    TOGGLE_SIDEBAR(state) {
      state.isSidebar = !state.isSidebar;
    },
  },
  actions: {
    FetchMenuList({ commit }) {
      return getMenuList().then(({ data }) => commit("SET_MENU_LIST", data));
    },
    CreateOrder({ commit, state }, order) {
      if (isRegistered.value) {
        return createOrder(order).then(({ data }) => {
          Object.assign(order, { orderNr: data.orderNr });
          state.orders.push(order);
          localStorage.setItem("orders", JSON.stringify(state.orders));
          localStorage.setItem(
            "order_info",
            JSON.stringify({
              eta: data.eta,
              orderNr: data.orderNr,
            })
          );
          commit("ADD_CART_ITEM", {});
        });
      }
      return createOrder(order).then(({ data }) => {
        localStorage.setItem(
          "order_info",
          JSON.stringify({
            eta: data.eta,
            orderNr: data.orderNr,
          })
        );
        commit("ADD_CART_ITEM", {});
      });
    },
  },
  getters: {
    totalCartPrice: (state) => {
      return state.cartItems.reduce(
        (sum, item) => sum + item.price * item.count,
        0
      );
    },
  },
});
