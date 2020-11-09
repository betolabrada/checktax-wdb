<template>
  <section>
    <div class="section-header">
      Aplicar Operación
    </div>
    <div class="section-content d-flex flex-column align-items-end">
      <div class="main-input-group">
        <label for="input-chequera">Chequera</label>
        <input id="input-chequera" type="text">
      </div>
      <div class="main-input-group">
        <label for="input-sucursal">Sucursal</label>
        <input id="input-sucursal" type="text">
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class AplicarOp extends Vue {}
</script>
