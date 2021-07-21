import Vue from "vue";
import Vuex from "vuex";
import persistedstate from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    loginaccess: "로그인"
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    addCart(state, data) {
      state.cart.push(data);
      state.count++;
    },
    user(state, data) {
      state.user = data;
    }
  },
  actions: {},
  plugins: [
    persistedstate({
      // 재시작 시에도 유지시킬 state
      //paths: ["user"]
      paths: "loginaccess"
    })
  ]
});
