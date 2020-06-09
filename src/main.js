/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    START_NODE_ROW: 6,
    START_NODE_COL: 5,
    TARGET_NODE_ROW: 6,
    TARGET_NODE_COL: 22,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
