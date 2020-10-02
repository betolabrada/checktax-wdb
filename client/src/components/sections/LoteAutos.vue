<template>
  <div class="section-content">
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
</style>
