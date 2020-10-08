<template>
    <div class="section-content">
        <div class="form-group">
            <label for="input-idCliente">ID Cliente</label>
            <input id="input-saldoInicial" type="text">
        </div>
        <div style="width: 75px; margin-top: 10px"><label>Facturas Financieras</label></div>
        <div class="form-group">
            <label for="input-zC">ZC</label>
            <input id="input-zC" type="text">
        </div>
        <div class="form-group">
            <label for="input-zI">ZI</label>
            <input id="input-zI" type="text">
        </div>
        <div class="form-group">
            <label for="input-zG">ZG</label>
            <input id="input-zG" type="text">
        </div>
        <div class="form-group">
            <label for="input-zA">zA</label>
            <input id="input-zA" type="text">
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class Otros extends Vue {}
</script>

<style scoped>
label {
  font-weight: 700;
  text-align: right;
  margin: 0 4px;
}
input {
  width: 75px;
}
</style>