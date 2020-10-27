<template>
    <div class="section-content d-flex flex-column align-items-end">
        <div class="input-group green">
            <label for="input-saldoInicial">Saldo Inicial</label>
            <input id="input-saldoInicial" type="text">
        </div>
        <div class="input-group green">
            <label for="input-gtsCobranza">Gts Cobranza</label>
            <input id="input-gtsCobranza" type="text">
        </div>
        <div class="input-group green">
            <label for="input-Moratorios">Moratorios</label>
            <input id="input-Moratorios" type="text">
        </div>
        <div class="input-group green">
            <label for="input-seguroDeuda">Seguro Deuda</label>
            <input id="input-seguroDeuda" type="text">
        </div>
        <div class="input-group green">
            <label for="input-seguroAuto">Seguro Auto</label>
            <input id="input-seguroAuto" type="text">
        </div>
        <div class="input-group green">
            <label for="input-GPS">GPS</label>
            <input id="input-GPS" type="text">
        </div>
        <div class="input-group green">
            <label for="input-Admon">Admon</label>
            <input id="input-Admon" type="text">
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Garantia extends Vue {}
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
.section-content{
    align-content: center;
}

.input-group {
    margin: 0px;
}
</style>