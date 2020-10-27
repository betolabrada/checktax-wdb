<template>
  <section>
    <div class="section-header">
      Financiamiento
    </div>
    <div class="section-content d-flex flex-column align-items-end">
      <div class="form-group">
        <label for="input-producto">Producto</label>
        <input id="input-producto" type="text">
      </div>
      <div class="form-group">
        <label for="input-fondeador">Fondeador</label>
        <input id="input-fondeador" type="text">
      </div>
      <div class="form-group">
        <label for="input-noPagos">No. Pagos</label>
        <input id="input-noPagos" type="text">
      </div>
      <div class="form-group">
        <label for="input-periodicidad">Periodicidad</label>
        <input id="input-periodicidad" type="text">
      </div>
      <div class="form-group">
        <label for="input-valorOperacion">Valor Operación</label>
        <input id="input-valorOperacion" type="text">
      </div>
      <div class="form-group">
        <label for="input-financiamientoTipo">Financiamiento Tipo</label>
        <input id="input-financiamientoTipo" type="text">
      </div>
      <div class="form-group">
        <label for="input-tasaAnual">Tasa Anual</label>
        <input id="input-tasaAnual" type="text">
      </div>
      <div style="width: 75px; margin-top: 10px; text-align: center;"><label>Importe</label></div>
      <div class="form-group">
        <label for="input-anticipo">Anticipo</label>
        <input id="input-anticipo" type="text">
        <label class="block-label" for="input-impAnticipo"></label>
        <input id="input-impAnticipo" type="text">
      </div>
      <div class="form-group">
        <label for="input-seguroDeuda">SeguroDeuda</label>
        <input id="input-seguroDeuda" type="text">
        <label for="input-impSeguroDeuda"></label>
        <input id="input-impSeguroDeuda" type="text">
      </div>
      <div class="form-group">
        <label for="input-apertura">Apertura</label>
        <input id="input-apertura" type="text">
        <label for="input-impApertura"></label>
        <input id="input-impApertura" type="text">
      </div>
      <div class="form-group">
        <label for="input-deposito">Depósito</label>
        <input id="input-deposito" type="text">
        <label for="input-impDeposito"></label>
        <input id="input-impDeposito" type="text">
      </div>
      <div class="form-group">
        <label for="input-admin">Administración</label>
        <input id="input-admin" type="text">
        <label for="input-impAdmin"></label>
        <input id="input-impAdmin" type="text">
      </div>
      <div class="form-group">
        <label for="input-gps">GPS</label>
        <input id="input-gps" type="text">
        <label for="input-impGps"></label>
        <input id="input-impGps" type="text">
      </div>
      <div class="form-group">
        <label for="input-seguroAuto">SeguroAuto</label>
        <input id="input-seguroAuto" type="text">
        <label for="input-impSeguroAuto"></label>
        <input id="input-impSeguroAuto" type="text">
      </div>
      <div class="form-group">
        <label for="input-valorRescate">ValorRescate</label>
        <input id="input-valorRescate" type="text">
        <label for="input-impValorRescate"></label>
        <input id="input-impValorRescate" type="text">
      </div>
      <div class="form-group">
        <label for="input-descuento">Descuento</label>
        <input id="input-descuento" type="text">
        <label for="input-impDescuento"></label>
        <input id="input-impDescuento" type="text">
      </div>
      <div style="text-align: right;"><hr style="border-top: #000000 solid 1px; width: 75px"></div>
      <div class="form-group">
        <label for="input-total">Total Primer Pago</label>
        <input id="input-total" type="text">
      </div>
    </div><!-- section-content -->
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Financiamiento extends Vue {}
</script>


<style scoped>
.form-group:first-child {
  margin-bottom: 0.75rem;
}
</style>
