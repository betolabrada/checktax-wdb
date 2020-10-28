<template>
  <div class="section-content">
    <div class="d-flex">
      <div class="form-group" @click="handleClickInputOperacion()">
        <label for="input-operacion">Operación</label>
        <input id="input-operacion"
               type="text"
               :value="numOperacion"
               @input="update('operacion', $event)"
               @keyup.enter="findOperacion()"
               :disabled="foundOperacion">
      </div>
      <div class="form-group">
        <label for="input-fecha">Fecha</label>
        <input id="input-fecha" type="text" :value="operacion.fecha" @input="update('fecha', $event)">
      </div>
      <div class="form-group">
        <label for="input-folio">Folio Com.</label>
        <input id="input-folio" type="text" :value="operacion.folio" @input="update('folio', $event)">
      </div>
      <div class="form-group d-block">
        <label for="input-refPagos">Referencia Pagos</label>
        <input id="input-refPagos" type="text" :value="operacion.referencia" @input="update('referencia', $event)">
      </div>
    </div>
    <div class="d-flex">
      <div class="form-group d-block">
        <label for="input-cliente">Cliente</label>
        <input id="input-cliente" type="text" :value="operacion.dePara" @input="update('dePara', $event)">
      </div>
    </div>
    <div class="d-flex">
      <div class="form-group">
        <label for="input-persona">Persona</label>
        <input id="input-persona" type="text" :value="operacion.persona" @input="update('persona', $event)">
      </div>
      <div class="form-group d-block">
        <label for="input-personaDesc">Descripción</label>
        <input id="input-personaDesc" type="text" :value="operacion.descripcion" @input="update('descripcion', $event)">
      </div>
    </div>
    <div class="d-flex">
      <div class="form-group d-block">
        <label for="input-asesor">Asesor</label>
        <input id="input-asesor" type="text" :value="operacion.promotor" @input="update('promotor', $event)">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
  name: 'General',
  data() {
    return {
      foundOperacion: false,
      operacion: {
        fecha: '',
        folio: '',
        referencia: '',
        dePara: '',
        persona: '',
        descripcion: '',
        promotor: '',
      },
    }
  },
  computed: {
    ...mapState(['finanzas']),
    numOperacion() {
      return this.$store.state.operacionPost.operacion;
    }
  },
  methods: {
    ...mapMutations(['setOperacionPost','operacionClear']),
    ...mapActions(['postOperacion']),
    update(key, event) {
      this.operacion[key] = event.target.value;
      this.setOperacionPost({ [key]: event.target.value });
    },
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
          referencia,
          dePara,
          persona,
          descripcion,
          promotor
        } = operacionExiste;
        this.operacion = {
          numero,
          fecha,
          folio,
          referencia,
          dePara,
          persona,
          descripcion,
          promotor
        }
        this.foundOperacion = true;
        this.setOperacionPost(this.operacion);
      } else {
        this.foundOperacion = false;
        this.clearContent();
        this.operacionClear();
      }
    },
    handleClickInputOperacion() {
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
