<template>
  <div class="main-form">
    <div class="section-header">
      Alta - Baja - Edición de Operaciones
    </div>
    <general></general>
    <div class="section-divided">
      <div class="left-side">
        <div class="section-header">
          Otros Parámetros
        </div>
        <otros-param></otros-param>
        <div class="section-header">
          Aplicar Operación
        </div>
        <aplicar-op></aplicar-op>
        <div class="section-header">
          Comentarios
        </div>
        <comentarios></comentarios>
      </div>
      <div class="right-side">
        <div class="section-header">
          Financiamiento
        </div>
        <financiamiento></financiamiento>
        <div class="section-header">
          Lote Autos
        </div>
        <lote-autos></lote-autos>
      </div><!-- right-side -->
    </div>

  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import General from '@/components/sections/General.vue';
import OtrosParam from '@/components/sections/OtrosParam.vue';
import AplicarOp from '@/components/sections/AplicarOp.vue';
import Comentarios from '@/components/sections/Comentarios.vue';
import Financiamiento from '@/components/sections/Financiamiento.vue';
import LoteAutos from '@/components/sections/LoteAutos.vue';

@Component({
  components: {
    General,
    OtrosParam,
    AplicarOp,
    Comentarios,
    Financiamiento,
    LoteAutos
  }
})
export default class MainForm extends Vue {}
</script>

<style>
.main-form {
  width: 500px;
  background: #e5e5e5;
  margin: 16px;
}

.section-header {
  background: var(--gray-nav);
  color: #fff;
  padding: 0.65rem 0 0.65rem 0.65rem;
  text-align: left;
  box-sizing: border-box;
}

.section-divided {
  display: flex;
}

.left-side {
  width: 178px;
  border-right: var(--gray-nav) solid 2px;
}

.right-side {
  width: 320px;
}

.section-content {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding: 0.65rem;
}

.field-wrap-vertical {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.field-wrap-vertical input {
  width: 100%;
}

label {
  font-weight: 700;
  margin: 0 4px;
}

.labels-flex {
  display: flex;
}

.labels-flex > div {
  width: 75px;
}

.labels-flex > div:last-child {
  margin-left: 4px;
}

a {
  color: #42b983;
}
</style>
