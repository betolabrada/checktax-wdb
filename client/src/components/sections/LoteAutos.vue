<template>
  <section>
    <div class="section-header">
      Lote Autos
    </div>
    <div class="section-content d-flex flex-column align-items-end">
      <div class="form-group field-wrap-vertical mb-1" style="width: 100%">
        <label for="input-razonSocial">Razón Social</label>
        <input id="input-razonSocial" type="text">
      </div>
      <div class="labels-flex">
        <div><label>Comisión</label></div>
        <div><label>Importe</label></div>
      </div>
      <div class="form-group">
        <label for="input-sinIVA">Sin IVA</label>
        <input id="input-sinIVA" type="text">
        <label for="input-impSinIVA"></label>
        <input id="input-impSinIVA" type="text">
      </div>
      <div class="form-group mb-1">
        <label for="input-conIVA">Con IVA</label>
        <input id="input-conIVA" type="text">
        <label for="input-impConIVA"></label>
        <input id="input-impConIVA" type="text">
      </div>
      <div class="form-group">
        <label for="input-lineaVenta">LineaVenta</label>
        <input id="input-lineaVenta" type="text">
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class LoteAutos extends Vue {}
</script>


<style scoped>
.mb-1 {
  margin-bottom: 1rem;
}

.field-wrap-vertical {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.field-wrap-vertical input {
  width: 100%;
}

.labels-flex {
  display: flex;
}

.labels-flex > div {
  width: 75px;
}

.labels-flex > div:last-child {
  margin-left: 4px;
}
</style>
