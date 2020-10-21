<template>
  <div class="main-form bordered">
    <div class="section-header" @click="$emit('clickHeader')">Alta - Baja - Edición de Operaciones</div>
    <general></general>
    <div class="d-flex">
      <div class="left-side">
        <otros-param></otros-param>
        <aplicar-op></aplicar-op>
        <comentarios></comentarios>
      </div>
      <div class="right-side">
        <financiamiento></financiamiento>
        <lote-autos></lote-autos>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import General from "@/components/sections/General.vue";
import OtrosParam from "@/components/sections/OtrosParam.vue";
import AplicarOp from "@/components/sections/AplicarOp.vue";
import Comentarios from "@/components/sections/Comentarios.vue";
import Financiamiento from "@/components/sections/Financiamiento.vue";
import LoteAutos from "@/components/sections/LoteAutos.vue";

@Component({
  components: {
    General,
    OtrosParam,
    AplicarOp,
    Comentarios,
    Financiamiento,
    LoteAutos,
  },
})
export default class MainForm extends Vue {}
</script>

<style>
.main-form {
  width: 500px;
  background: #e5e5e5;
  margin: 16px 0 16px 16px;
}
a {
  color: #42b983;
}
</style>
