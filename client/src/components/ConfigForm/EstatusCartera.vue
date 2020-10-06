<template>
<section>
  <div class="section-header">Estatus Cartera</div>
  <div class="section-content">
    <div class="d-flex mb-1">
      <div class="input-group">
        <label for="config-ec-plazo">Plazo</label>
        <input id="config-ec-plazo">
      </div>
      <div class="input-group">
        <label for="config-ec-estatus">Estatus</label>
        <input id="config-ec-estatus">
      </div>
    </div>
    <div class="d-flex">
      <div class="input-group d-flex">
        <label for="config-ec-actualizacionAuto">Actualización Automática</label>
        <input type="checkbox" id="config-ec-actualizacionAuto">
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
name: "EstatusCartera"
}
</script>

<style scoped>

</style>
