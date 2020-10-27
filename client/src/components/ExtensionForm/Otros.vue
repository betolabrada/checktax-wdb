<template>
    <div class="section-content d-flex flex-column align-items-end">
        <div class="input-group green">
            <label for="input-idCliente">ID Cliente</label>
            <input id="input-saldoInicial" type="text">
        </div>
        <div style="width: 75px; margin-top: 10px"><label>Facturas Financieras</label></div>
        <div class="input-group green">
            <label class="font-mono" for="input-zC">ZC</label>
            <input id="input-zC" type="text">
        </div>
        <div class="input-group green">
            <label class="font-mono" for="input-zI">ZI</label>
            <input id="input-zI" type="text">
        </div>
        <div class="input-group green">
            <label class="font-mono" for="input-zG">ZG</label>
            <input id="input-zG" type="text">
        </div>
        <div class="input-group green">
            <label class="font-mono" for="input-zA">ZA</label>
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

.input-group{
    margin: 0px;
}

.font-mono {
    font-family: monospace;
    font-weight: 800;
}

</style>