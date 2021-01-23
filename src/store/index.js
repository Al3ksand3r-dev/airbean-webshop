import { createStore } from "vuex";
import { getMenuList } from "@/services/MenuServices";

export default createStore({
  state: {
    count: 1,
    menuList: [],
    cartItems: [],
    isActive: false,
  },
  mutations: {
    SET_MENU_LIST(state, menuList) {
      state.menuList = menuList;
    },
    ADD_CART_ITEM(state, item) {
      const newItem = Object.assign({ count: state.count }, item);
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        existingItem.count++;
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
  },
  actions: {
    FetchMenuList({ commit }) {
      return getMenuList().then(({ data }) => commit("SET_MENU_LIST", data));
    },
  },
});
