<template>
<section>
  <div class="section-header">Valores Por Default Financiamientos</div>
  <div class="section-content d-flex">
    <div class="form-group d-flex flex-column align-items-end">
      <div class="input-group mb-1">
        <label for="config-defaults-fondeador">Fondeador</label>
        <input id="config-defaults-fondeador">
      </div>
      <div class="input-group">
        <label for="config-defaults-saldoInicial">SaldoInicial</label>
        <input id="config-defaults-saldoInicial">
      </div>
      <div class="input-group">
        <label for="config-defaults-gtsCobranza">GtsCobranza</label>
        <input id="config-defaults-gtsCobranza">
      </div>
      <div class="input-group">
        <label for="config-defaults-moratorios">Moratorios</label>
        <input id="config-defaults-moratorios">
      </div>
      <div class="input-group">
        <label for="config-defaults-seguroDeuda">SeguroDeuda</label>
        <input id="config-defaults-seguroDeuda">
      </div>
      <div class="input-group">
        <label for="config-defaults-seguroAuto">SeguroAuto</label>
        <input id="config-defaults-seguroAuto">
      </div>
      <div class="input-group">
        <label for="config-defaults-gps">GPS</label>
        <input id="config-defaults-gps">
      </div>
    </div>
    <div class="form-group d-flex flex-column align-items-end my-1">
      <div class="d-flex">
        <div class="input-checkbox-header">Fin</div>
        <div class="input-text-header">Importe</div>
      </div>
      <div class="input-group d-flex">
        <label for="config-defaults-finAdmon">Admon</label>
        <label for="config-defaults-check-finAdmon"></label>
        <input id="config-defaults-check-finAdmon" type="checkbox">
        <input id="config-defaults-finAdmon">
      </div>
      <div class="input-group d-flex">
        <label for="config-defaults-finGps">GPS</label>
        <label for="config-defaults-check-finGps"></label>
        <input id="config-defaults-check-finGps" type="checkbox">
        <input id="config-defaults-finGps">
      </div>
      <div class="input-group d-flex">
        <label for="config-defaults-finSeguroAuto">SeguroAuto</label>
        <label for="config-defaults-check-finSeguroAuto"></label>
        <input id="config-defaults-check-finSeguroAuto" type="checkbox">
        <input id="config-defaults-finSeguroAuto">
      </div>
      <div class="input-group d-flex">
        <label for="config-defaults-finSeguroDeuda">SeguroDeuda</label>
        <label for="config-defaults-check-finSeguroDeuda"></label>
        <input id="config-defaults-check-finSeguroDeuda" type="checkbox">
        <input id="config-defaults-finSeguroDeuda">
      </div>
      <div class="input-group d-flex">
        <label for="config-defaults-descuento">Descuento</label>
        <label for="config-defaults-check-descuento"></label>
        <input id="config-defaults-check-descuento" type="checkbox">
        <input id="config-defaults-descuento">
      </div>
    </div>

  </div>
</section>
</template>

<script>
export default {
name: "ValoresDefaultFin"
}
</script>

<style scoped>
input[type="checkbox"] {
  width: 15px;
  padding: 0;
  margin: 0 0.5rem 0 0;
  align-self: flex-start;
}

.input-checkbox-header {
  width: 15px;
  margin-right: 0.5rem;
}

.input-text-header {
  width: 75px;
}
</style>
