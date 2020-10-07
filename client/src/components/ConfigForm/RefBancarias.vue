<template>
<section>
  <div class="section-header">Referencias Bancarias</div>
  <div class="section-content d-flex flex-column align-items-end">
    <label class="d-block text-align-left" style="align-self: center">Caracteres</label>
    <div class="input-group">
      <label for="config-refbanc-max">Máximo</label>
      <input id="config-refbanc-max">
    </div>
    <div class="input-group">
      <label for="config-refbanc-min">Mínimo</label>
      <input id="config-refbanc-min">
    </div>
  </div>
</section>
</template>

<script>
export default {
name: "RefBancarias"
}
</script>

<style scoped>

</style>
