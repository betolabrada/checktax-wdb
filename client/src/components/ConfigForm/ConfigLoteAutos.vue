<template>
<section>
  <div class="section-header">Lotes Autos</div>
  <div class="section-content">
    <div class="form-group d-flex justify-content-between">
      <div class="input-group">
        <label class="d-block" for="config-loteAutos-sucursal">Sucursal</label>
        <input id="config-loteAutos-sucursal">
      </div>
      <div class="d-flex justify-content-center">
        <div class="input-group">
          <label class="d-block" for="config-loteAutos-comision">Comisión</label>
          <input id="config-loteAutos-comision">
        </div>
        <div class="input-group text-align-left">
          <label class="d-block" for="config-loteAutos-tel">Teléfono</label>
          <input id="config-loteAutos-tel">
        </div>
      </div>
      <div class="input-group">
        <label class="d-block" for="config-loteAutos-tel2">Teléfono</label>
        <input id="config-loteAutos-tel2">
      </div>
    </div>
    <div class="form-group">
      <div class="input-group d-block">
        <label for="config-loteAutos-razonSocial">Razón Social</label>
        <input id="config-loteAutos-razonSocial">
      </div>
      <div class="input-group d-block">
        <label for="config-loteAutos-asesor">Asesor</label>
        <input id="config-loteAutos-asesor">
      </div>
      <div class="input-group d-block">
        <label for="config-loteAutos-mail">Mail</label>
        <input id="config-loteAutos-mail">
      </div>
      <div class="input-group d-block">
        <label for="config-loteAutos-domicilio">Domicilio</label>
        <input id="config-loteAutos-domicilio">
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
name: "ConfigLoteAutos"
}
</script>

<style scoped>

</style>
