<template>
  <section>
    <div class="section-header">
      Fondeadores
    </div>
    <div class="section-content">
      <div class="d-flex">
        <div class="main-input-group">
          <label for="config-fondeador">Fondeador</label>
          <input id="config-fondeador">
        </div>
        <div class="main-input-group">
          <label for="config-prcFondeo">% Fondeo</label>
          <input id="config-prcFondeo">
        </div>
        <div class="main-input-group">
          <label for="config-chequera">Chequera</label>
          <input id="config-chequera">
        </div>
        <div class="main-input-group">
          <label for="config-comPromotor">Com. Promotor</label>
          <input id="config-comPromotor">
        </div>
      </div>
      <div class="d-flex">
        <div class="d-block">
          <label for="config-razonSocial">Razón Social</label>
          <input id="config-razonSocial">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
name: "Fondeadores"
}
</script>

<style scoped>
label {
  text-align: left;
  display: block;
}

.main-input-group:not(:last-child) {
  margin-right: 4px;
}

.main-input-group:first-child {
  margin-right: auto;
}

.main-input-group:last-child, .main-input-group:last-child input {
  width: 100px;
}
</style>
