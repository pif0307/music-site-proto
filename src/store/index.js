import Vue from "vue";
import Vuex from "vuex";

import music from "./music.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 1,
  },
  mutations: {
    increase(state) {
      state.counter += 1;
    },
  },
  actions: {},
  modules: {
    music,
  },
});
