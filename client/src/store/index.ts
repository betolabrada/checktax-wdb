import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    privileges: [
      {
        view: "Cotizaciones",
        access: true,
        writing: false,
      },
      {
        view: "Financiamiento",
        access: false,
        writing: true,
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
