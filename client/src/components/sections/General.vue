<template>
  <div class="section-content">
    <div class="d-flex">
      <div class="form-group" @click="handleClickInputOperacion()">
        <label for="input-operacion">Operación</label>
        <input id="input-operacion"
               type="number"
               v-model="numOperacion"
               @keyup.enter="findOperacion()"
               :disabled="foundOperacion">
      </div>
      <div class="form-group">
        <label for="input-fecha">Fecha</label>
        <input id="input-fecha" type="text" v-model="operacion.fecha">
      </div>
      <div class="form-group">
        <label for="input-folio">Folio Com.</label>
        <input id="input-folio" type="text">
      </div>
      <div class="form-group d-block">
        <label for="input-refPagos">Referencia Pagos</label>
        <input id="input-refPagos" type="text">
      </div>
    </div>
    <div class="d-flex">
      <div class="form-group d-block">
        <label for="input-cliente">Cliente</label>
        <input id="input-cliente" type="text" v-model="operacion.cliente">
      </div>
    </div>
    <div class="d-flex">
      <div class="form-group">
        <label for="input-persona">Persona</label>
        <input id="input-persona" type="text" v-model="operacion.persona">
      </div>
      <div class="form-group d-block">
        <label for="input-personaDesc">Descripción</label>
        <input id="input-personaDesc" type="text" v-model="operacion.descripcion">
      </div>
    </div>
    <div class="d-flex">
      <div class="form-group d-block">
        <label for="input-asesor">Asesor</label>
        <input id="input-asesor" type="text" v-model="operacion.asesor">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {
      foundOperacion: false,
      numOperacion: 0,
      operacion: {
        numero: '',
        fecha: '',
        folioCom: '',
        refPagos: '',
        cliente: '',
        persona: '',
        descripcion: '',
        asesor: '',
      },
    }
  },
  computed: {
    ...mapState(['finanzas', 'finanza']),
  },
  methods: {
    ...mapActions(['fetchFinanza']),
    clearContent() {
      this.operacion = {};
    },
    findOperacion() {
      const operacionExiste = this.finanzas.find((fin) => fin.operacion === parseInt(this.numOperacion));
      if (operacionExiste) {
        // fill form
        console.log('Found operacion: ', operacionExiste);
        const {
          numero,
          fecha,
          folio,
          refPagos,
          dePara,
          persona,
          descripcion,
          asesor
        } = operacionExiste;
        this.operacion = {
          numero,
          fecha,
          folioCom: folio,
          refPagos,
          cliente: dePara,
          persona,
          descripcion,
          asesor
        }
        this.foundOperacion = true;
      } else {
        this.foundOperacion = false;
      }
    },
    handleClickInputOperacion() {
      this.clearContent();
      if (this.foundOperacion) {
        this.foundOperacion = false;
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

label {
  display: block;
  text-align: left;
}

.form-group:not(:last-child) {
  margin-right: 4px;
}

.form-group input {
  width: 80px;
}

.form-group:nth-child(3) input {
  width: 100px;
}

.d-block {
  display: block;
  width: 100%;
}

.d-block input {
  width: 100%;
}

a {
  color: #42b983;
}
</style>
