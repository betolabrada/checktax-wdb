<template>
<section>
  <div class="section-header">Seguros Autos</div>
  <div class="section-content">
    <div class="form-group d-flex justify-content-between">
      <div class="input-group">
        <label class="d-block" for="config-segAuto-compa">Compañía</label>
        <input id="config-segAuto-compa">
      </div>
      <div class="input-group">
        <label class="d-block" for="config-segAuto-comision">Comisión</label>
        <input id="config-segAuto-comision">
      </div>
    </div>
    <div class="form-group">
      <div class="input-group d-block">
        <label for="config-segAuto-razonSocial">RazónSocial</label>
        <input id="config-segAuto-razonSocial">
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
name: "SegurosAutos"
}
</script>

<style scoped>

</style>
