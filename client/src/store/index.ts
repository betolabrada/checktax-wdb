import Vue from "vue";
import Vuex from "vuex";

import Service from '@/services/Service';
import productos from '@/services/models/productos.json';
import operaciones from '@/services/models/operaciones-query.json';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    asesor: '',
    cliente: '',
    finanzas : [] as any,
    operacionPost: {
      operacion: "",
      fecha: null,
      noPagos: 0,
      peridiocidad: "",
      referencia: "",
      dePara: "",
      descripcion: "",
      persona: "",
      promotor: "",
      tfiva: false,
      iva: 0,
      tfseguro: false,
      compania: "",
      prima: 0,
      fpago: "",
      poliza: "",
      tfSegFin: false,
      vigInicio: "",
      vigFinal: "",
      tipoUnidad: "",
      fechaPago: null,
      relPago: "",
      siniestros: "",
      cantPolizas: "",
      sigVenc: "",
      vAsegurado: "",
      tipo: "",
      marca: "",
      serie: "",
      modelo: "",
      factura: "",
      version: "",
      motor: "",
      lote: "",
      comision: 0,
      importe: 0,
      producto: "",
      fondeador: "",
      valorOperacion: 0,
      tipoFin: "",
      tasa: 0,
      anticipo: 0,
      seguroDeuda: 0,
      apertura: 0,
      deposito: 0,
      admon: 0,
      gps: 0,
      seguroAuto: 0,
      vRescate: 0,
      descuento: 0,
      chequera: "",
      ctroCosto: "",
      folio: "",
      lineaVta: "",
      comentarios: "",
      estatus: "",
      cancelado: false,
      idCliente: "",
      ffzc: "",
      ffzi: "",
      ffzg: "",
      ffza: "",
      empresa: "",
      lineaVenta: "",
      aplicaPagos: false,
      fFondeo: null
    },
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
    producto: {
      producto: "",
      tipo: "",
      tasa: 0,
      anticipo: 0,
      apertura: 0,
      deposito: 0,
      tfrescate: false,
      tfadmon: false,
      gps: 0,
      tfgps: false,
      tfseguroauto: false,
      segurodeuda: 0,
      tfsegurodeuda: false,
      liquidacion: 0,
      pptipo: ""
    }
  },
  mutations: {
    setFinanzas(state, data) {      
      state.finanzas = data;
    },
    setOperacionPost(state, data) {
      const prev = state.operacionPost;
      state.operacionPost = {
        ...prev,
        ...data
      }
      console.log('state.operacionPost', state.operacionPost);

    },
    operacionClear(state) {
      state.operacionPost = {
        operacion: "",
        fecha: null,
        noPagos: 0,
        peridiocidad: "",
        referencia: "",
        dePara: "",
        descripcion: "",
        persona: "",
        promotor: "",
        tfiva: false,
        iva: 0,
        tfseguro: false,
        compania: "",
        prima: 0,
        fpago: "",
        poliza: "",
        tfSegFin: false,
        vigInicio: "",
        vigFinal: "",
        tipoUnidad: "",
        fechaPago: null,
        relPago: "",
        siniestros: "",
        cantPolizas: "",
        sigVenc: "",
        vAsegurado: "",
        tipo: "",
        marca: "",
        serie: "",
        modelo: "",
        factura: "",
        version: "",
        motor: "",
        lote: "",
        comision: 0,
        importe: 0,
        producto: "",
        fondeador: "",
        valorOperacion: 0,
        tipoFin: "",
        tasa: 0,
        anticipo: 0,
        seguroDeuda: 0,
        apertura: 0,
        deposito: 0,
        admon: 0,
        gps: 0,
        seguroAuto: 0,
        vRescate: 0,
        descuento: 0,
        chequera: "",
        ctroCosto: "",
        folio: "",
        lineaVta: "",
        comentarios: "",
        estatus: "",
        cancelado: false,
        idCliente: "",
        ffzc: "",
        ffzi: "",
        ffzg: "",
        ffza: "",
        empresa: "",
        lineaVenta: "",
        aplicaPagos: false,
        fFondeo: null
      }
    },
    addOperacion(state){
      state.finanzas.push(state.operacionPost);
    },
    setProducto(state, data) {
      const prev = state.producto;
      state.producto = {
        ...prev,
        ...data
      }
      console.log(state.producto);
    },

    setAsesor(state, asesor) {
      state.asesor = asesor;
    },

    setCliente(state, cliente) {
      state.cliente = cliente;
    }
  },
  actions: {
    // Fetch finanzas array
    async fetchFinanzas({ commit }) {
      const res = await Service.getFinanzas();
      commit('setFinanzas', res.data);
    },
    // Post operacion
    async postOperacion({ commit, dispatch }) {
      const res = await Service.postOperacion(this.state.operacionPost);
      if(res.data){
        dispatch('fetchFinanzas');
      }
      return res.data;
    },
    async updateOperacion({ commit, dispatch }) {
      const res = await Service.updateOperacion(this.state.operacionPost.operacion, this.state.operacionPost);
      console.log('res: ', res);
      if (res.data) {
        dispatch('fetchFinanzas');
      }
      
    },
    async fetchProducto({ commit }){
      const res = await Service.getProducto();
      commit('setProducto', res.data);
    },

    async fetchAsesor({ commit }) {
      const res = await Service.getAsesor();
      console.log('res ASESOR: ', res);
    },

    async fetchCliente({ commit }) {
      const res = await Service.getCliente();
      console.log('res CLIENTE: ', res);
    },
  },
  modules: {},
});
