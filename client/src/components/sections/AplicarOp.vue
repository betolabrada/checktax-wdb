<template>
  <div class="section-content">
    <div class="form-group">
      <label for="input-chequera">Chequera</label>
      <input id="input-chequera" type="text">
    </div>
    <div class="form-group">
      <label for="input-sucursal">Sucursal</label>
      <input id="input-sucursal" type="text">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class AplicarOp extends Vue {}
</script>

<style scoped>

label {
  font-weight: 700;
  text-align: left;
  margin: 0 4px;
}

input {
  width: 75px;
}

</style>
