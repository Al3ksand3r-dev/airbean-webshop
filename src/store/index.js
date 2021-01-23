import { createStore } from "vuex";
import { getMenuList } from "@/services/MenuServices";

export default createStore({
  state: {
    menuList: [],
  },
  mutations: {
    SET_MENU_LIST(state, menuList) {
      state.menuList = menuList;
      console.log(menuList);
    },
  },
  actions: {
    FetchMenuList({ commit }) {
      return getMenuList().then(({ data }) => commit("SET_MENU_LIST", data));
    },
  },
});
