<template>
  <section>
    <div class="section-header">
      Otros Parámetros
    </div>
    <div class="section-subheader">Impuestos</div>
    <div class="section-content d-flex flex-column align-items-end">
      <div class="form-group">
        <label for="input-iva">IVA</label>
        <input id="input-iva" type="text">
      </div>
      <div class="form-group">
        <label for="input-empresa">Empresa</label>
        <input id="input-empresa" type="text">
      </div>
    </div>
    <div class="section-subheader">SeguroAuto</div>
    <div class="section-content d-flex flex-column align-items-end">
      <div class="form-group">
        <label for="input-comp">Compañía</label>
        <input id="input-comp" type="text">
      </div>
      <div class="form-group">
        <label for="input-primaTotal">PrimaTotal</label>
        <input id="input-primaTotal" type="text">
      </div>
      <div class="form-group">
        <label for="input-formaPago">FormaPago</label>
        <input id="input-formaPago" type="text">
      </div>
      <div class="form-group">
        <label for="input-noPoliza">NoPoliza</label>
        <input id="input-noPoliza" type="text">
      </div>
      <div class="form-group d-flex">
        <label class="align-self-center m-0" for="input-financiado">Financiado</label>
        <input id="input-financiado" type="checkbox">
      </div>
      <div class="form-group">
        <label for="input-fechaInicio">FechaInicio</label>
        <input id="input-fechaInicio" type="text">
      </div>
      <div class="form-group">
        <label for="input-fechaFinal">FechaFinal</label>
        <input id="input-fechaFinal" type="text">
      </div>
      <div class="form-group">
        <label for="input-tipoUnidad">TipoUnidad</label>
        <input id="input-tipoUnidad" type="text">
      </div>
      <div class="form-group">
        <label for="input-fechaPago">FechaPago</label>
        <input id="input-fechaPago" type="text">
      </div>
      <div class="form-group">
        <label for="input-relacionPago">RelaciónPago</label>
        <input id="input-relacionPago" type="text">
      </div>
      <div class="form-group">
        <label for="input-siniestros">Siniestros</label>
        <input id="input-siniestros" type="text">
      </div>
      <div class="form-group">
        <label for="input-cantPolizas">CantPolizas</label>
        <input id="input-cantPolizas" type="text">
      </div>
      <div class="form-group">
        <label for="input-sigVencimiento">Sig.Vcmto</label>
        <input id="input-sigVencimiento" type="text">
      </div>
      <div class="form-group">
        <label for="input-precioAsegurado">$Asegurado</label>
        <input id="input-precioAsegurado" type="text">
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class OtrosParam extends Vue {}
</script>
