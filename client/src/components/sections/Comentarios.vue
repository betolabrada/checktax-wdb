<template>
  <section>
    <div class="section-header">
      Comentarios
    </div>
    <div class="section-content d-flex flex-column align-items-end">
      <div class="main-input-group">
        <label style="font-weight: 700" for="input-comentarios">Comentarios</label>
        <textarea id="input-comentarios"></textarea>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Comentarios extends Vue {}
</script>

<style scoped>

</style>
