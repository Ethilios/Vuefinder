/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    TOTAL_COLUMNS: 26,
    TOTAL_ROWS: 13,
    GRID: [],

    START_NODE_ROW: 7,
    START_NODE_COL: 5,
    TARGET_NODE_ROW: 7,
    TARGET_NODE_COL: 22,
    WALLS: [],
  },
  mutations: {
    addNodeToWalls(state, nodeX, nodeY) {
      state.WALLS += [nodeX, nodeY];
    },
  },
  actions: {
    addNodeToWalls({ commit }) {
      commit("addNodeToWalls");
    },
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
