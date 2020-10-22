import Vue from "vue";
import Vuex from "vuex";

import Service from '@/services/Service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    finanzas: [],
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
  mutations: {
    setFinanzas(state, data) {      
      state.finanzas = data;
    }
  },
  actions: {
    // Fetch finanzas array
    async fetchFinanzas({ commit }) {
      const res = await Service.getFinanzas();
      commit('setFinanzas', res.data);
    }
  },
  modules: {},
});
