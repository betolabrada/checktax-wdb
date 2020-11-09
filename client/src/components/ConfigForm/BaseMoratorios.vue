<template>
  <section>
    <div class="section-header">Base De Moratorios</div>
    <div class="section-content">
      <div class="d-flex justify-content-between">
        <div class="main-input-group">
          <label class="d-block" for="config-morat-fondeador">Fondeador</label>
          <input id="config-morat-fondeador">
        </div>
        <div class="main-input-group">
          <label class="d-block" for="config-morat-tasaMensual">TasaMensual</label>
          <input id="config-morat-tasaMensual">
        </div>
      </div>
      <div class="d-flex justify-content-between mb-1">
        <div class="main-input-group">
          <label class="d-block" for="config-morat-diasMargen">Días Margen</label>
          <input id="config-morat-diasMargen">
        </div>
        <div class="main-input-group">
          <label class="d-block" for="config-morat-gtsCobranza">GtsCobranza</label>
          <input id="config-morat-gtsCobranza">
        </div>
      </div>
      <div class="d-flex flex-column">
        <div class="main-input-group d-flex">
          <input type="checkbox" id="config-morat-saldoInicial">
          <label for="config-morat-saldoInicial">SaldoInicial</label>
        </div>
        <div class="main-input-group d-flex">
          <input type="checkbox" id="config-morat-seguroDeuda">
          <label for="config-morat-seguroDeuda">SeguroDeuda</label>
        </div>
        <div class="main-input-group d-flex">
          <input type="checkbox" id="config-morat-seguroAuto">
          <label for="config-morat-seguroAuto">SeguroAuto</label>
        </div>
        <div class="main-input-group d-flex">
          <input type="checkbox" id="config-morat-gps">
          <label for="config-morat-gps">GPS</label>
        </div>
        <div class="main-input-group d-flex">
          <input type="checkbox" id="config-morat-admin">
          <label for="config-morat-admin">Administración</label>
        </div>
        <div class="main-input-group d-flex">
          <input type="checkbox" id="config-morat-intereses">
          <label for="config-morat-intereses">Intereses</label>
        </div>
        <div class="main-input-group d-flex">
          <input type="checkbox" id="config-morat-capital">
          <label for="config-morat-capital">Capital</label>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BaseMoratorios'
};
</script>

<style scoped>
input[type="checkbox"] {
  width: 15px;
  margin: 0;
  padding: 0;
  align-self: flex-start;
}

.main-input-group.d-flex label {
  align-self: center;
}

.mb-1 {
  margin-bottom: 1rem;
}
</style>
