<template>
<section>
  <div class="section-header">Calificación Buró de Crédito</div>
  <div class="section-content">
    <div class="form-group d-flex justify-content-between">
      <div class="input-group">
        <label class="d-block" for="config-buro-clave">Clave</label>
        <input id="config-buro-clave">
      </div>
      <div class="d-flex justify-content-center">
        <div class="input-group">
          <label class="d-block" for="config-buro-diasMin">DíasMínimo</label>
          <input id="config-buro-diasMin">
        </div>
        <div class="input-group text-align-left">
          <label class="d-block" for="config-buro-diasMax">DíasMáximo</label>
          <input id="config-buro-diasMax">
        </div>
      </div>
      <div class="input-group">
        <label class="d-block" for="config-buro-color">Color</label>
        <input id="config-buro-color">
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
name: "CalifBuro"
}
</script>

<style scoped>

</style>
