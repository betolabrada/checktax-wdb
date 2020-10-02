<template>
  <div class="section-body">
    <div class="section-row">
      <div class="form-group">
        <label for="input-operacion">Operación</label>
        <input id="input-operacion" type="text">
      </div>
      <div class="form-group">
        <label for="input-fecha">Fecha</label>
        <input id="input-fecha" type="text">
      </div>
      <div class="form-group">
        <label for="input-folio">Folio Com.</label>
        <input id="input-folio" type="text">
      </div>
      <div class="form-group form-group-block">
        <label for="input-refPagos">Referencia Pagos</label>
        <input id="input-refPagos" type="text">
      </div>
    </div>
    <div class="section-row">
      <div class="form-group form-group-block">
        <label for="input-cliente">Cliente</label>
        <input id="input-cliente" type="text">
      </div>
    </div>
    <div class="section-row">
      <div class="form-group">
        <label for="input-persona">Persona</label>
        <input id="input-persona" type="text">
      </div>
      <div class="form-group form-group-block">
        <label for="input-personaDesc">Descripción</label>
        <input id="input-personaDesc" type="text">
      </div>
    </div>
    <div class="section-row">
      <div class="form-group form-group-block">
        <label for="input-asesor">Asesor</label>
        <input id="input-asesor" type="text">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class General extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.section-body {
  padding: 0.65rem;
}

.section-row {
  display: flex;
  flex-direction: row;
}

label {
  display: block;
  font-weight: 700;
  text-align: left;
  margin-left: 4px;
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

.form-group-block {
  display: block;
  width: 100%;
}

.form-group-block input {
  width: 100%;
}
a {
  color: #42b983;
}
</style>
