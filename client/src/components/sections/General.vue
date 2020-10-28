<template>
  <div class="section-content">
    <div class="d-flex">
      <div class="d-flex flex-column mr-2">
        <label for="input-operacion" class="d-block">Operación
          <span class="fas fa-info-circle"
                v-b-tooltip.hover.right="'Buscar operación por número, si no existe, crea uno nuevo'"
          ></span>
        </label>
        <div class="main-input-group input-group input-group-sm">
          <input id="input-operacion"
                type="text"
                :value="numOperacion"
                @input="update('operacion', $event)"
                @keyup.enter="findOperacion()"
                :disabled="foundOperacion">
          <div class="input-group-append">
            <b-button
              type="button" 
              @click="findOperacion()"
              id="button-search"
              style="height: 1.5rem;"
              variant="secondary"
            >
              <i class="fas fa-check"></i>
            </b-button>
          </div>
        </div>
      </div>
      <div class="main-input-group">
        <label for="input-fecha">Fecha</label>
        <input id="input-fecha" type="text" :value="operacion.fecha" @input="update('fecha', $event)">
      </div>
      <div class="main-input-group">
        <label for="input-folio">Folio Com.</label>
        <input id="input-folio" type="text" :value="operacion.folio" @input="update('folio', $event)">
      </div>
      <div class="main-input-group d-block">
        <label for="input-refPagos">Referencia Pagos</label>
        <input id="input-refPagos" type="text" :value="operacion.referencia" @input="update('referencia', $event)">
      </div>
    </div>
    <div class="d-flex">
      <div class="main-input-group d-block">
        <label for="input-cliente">Cliente</label>
        <input id="input-cliente" type="text" :value="operacion.dePara" @input="update('dePara', $event)">
      </div>
    </div>
    <div class="d-flex">
      <div class="main-input-group">
        <label for="input-persona">Persona</label>
        <input id="input-persona" type="text" :value="operacion.persona" @input="update('persona', $event)">
      </div>
      <div class="main-input-group d-block">
        <label for="input-personaDesc">Descripción</label>
        <input id="input-personaDesc" type="text" :value="operacion.descripcion" @input="update('descripcion', $event)">
      </div>
    </div>
    <div class="d-flex">
      <div class="main-input-group d-block">
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
      numOperacionDisabled: false,
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
      if (this.foundOperacion) {
        this.foundOperacion = !this.foundOperacion;
        return;
      }
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
        this.numOperacionDisabled = true;
        this.setOperacionPost(this.operacion);
      } else {
        this.foundOperacion = false;
        this.numOperacionDisabled = false;
      }
    },
    handleClickInputOperacion() {
      console.log('click in input...');
      if (this.foundOperacion) {
        this.foundOperacion = false;
        this.numOperacionDisabled = false;
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

.main-input-group {
  flex-wrap: nowrap;
}

.main-input-group:not(:last-child) {
  margin-right: 4px;
}

.main-input-group:nth-child(3) input {
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

i {
  position: relative;
  top: -2px;
  color: #fff;
}
</style>
