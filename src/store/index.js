import { createStore } from "vuex";
import { getMenuList } from "@/services/MenuServices";

export default createStore({
  state: {
    count: 1,
    menuList: [],
    cartItems: [],
    isActive: false,
    openCartModal: false,
  },
  mutations: {
    SET_MENU_LIST(state, menuList) {
      state.menuList = menuList;
    },
    ADD_CART_ITEM(state, item) {
      const newItem = Object.assign({ count: state.count }, item);
      const itemExist = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (itemExist) {
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
  },
  actions: {
    FetchMenuList({ commit }) {
      return getMenuList().then(({ data }) => commit("SET_MENU_LIST", data));
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
