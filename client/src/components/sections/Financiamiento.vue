<template>
  <section>
    <div class="section-header">
      producto
    </div>
    <div class="section-content d-flex flex-column align-items-end">
      <div class="d-flex flex-column mb-3 text-center">
        <label for="input-producto">Producto
          <span class="fas fa-info-circle"
                v-b-tooltip.hover.right="'Escriba producto para buscarlo'"
          ></span>
        </label>
        <div class="main-input-group input-group input-group-sm">
          <input 
            id="input-producto"
            type="text"
            :value="producto.producto"
            @input="update('producto', $event)"
            @blur="checkProducto()"
            @keyup.enter="checkProducto()"
            style="width: 100px;"
          >
          <div class="input-group-append">
            <b-button
              type="button" 
              @click="checkProducto()"
              id="button-search"
              style="height: 1.5rem;"
              variant="secondary"
            >
              <i class="fas fa-search"></i>
            </b-button>
          </div>
        </div>
      </div><!--d-flex flex-column mr-2-->
      <div class="main-input-group">
        <label for="input-fondeador">Fondeador</label>
        <input id="input-fondeador" type="text">
      </div>
      <div class="main-input-group">
        <label for="input-noPagos">No. Pagos</label>
        <input id="input-noPagos" type="text">
      </div>
      <div class="main-input-group">
        <label for="input-periodicidad">Periodicidad</label>
        <input id="input-periodicidad" type="text" :value="producto.pptipo" @input="update('pptipo',$event)">
      </div>
      <div class="main-input-group">
        <label for="input-valorOperacion">Valor Operación</label>
        <input id="input-valorOperacion" type="text">
      </div>
      <div class="main-input-group">
        <label for="input-productoTipo">producto Tipo</label>
        <input id="input-productoTipo" type="text" :value="producto.tipo" @input="update('tipo',$event)">
      </div>
      <div class="main-input-group">
        <label for="input-tasaAnual">Tasa Anual</label>
        <input id="input-tasaAnual" class="text-center" type="text" :value="producto.tasa.toFixed(2) + '%'" @input="update('tasa',$event)">
      </div>
      <div style="width: 75px; margin-top: 10px; text-align: center;"><label>Importe</label></div>
      <div class="main-input-group">
        <label for="input-anticipo">Anticipo</label>
        <input id="input-anticipo" class="text-center" type="text" :value="producto.anticipo.toFixed(2) + '%'" @input="update('anticipo',$event)">
        <label class="block-label" for="input-impAnticipo"></label>
        <input disabled id="input-impAnticipo" type="text">
      </div>
      <div class="main-input-group">
        <label for="input-seguroDeuda">SeguroDeuda</label>
        <input id="input-seguroDeuda" class="text-center" type="text" :value="producto.segurodeuda.toFixed(2) + '%'" @input="update('segurodeuda',$event)">
        <label for="input-impSeguroDeuda"></label>
        <input disabled id="input-impSeguroDeuda" type="text">
      </div>
      <div class="main-input-group">
        <label for="input-apertura">Apertura</label>
        <input id="input-apertura" class="text-center" type="text" :value="producto.apertura.toFixed(2) + '%'" @input="update('apertura',$event)">
        <label for="input-impApertura"></label>
        <input disabled id="input-impApertura" type="text">
      </div>
      <div class="main-input-group">
        <label for="input-deposito">Depósito</label>
        <input id="input-deposito" class="text-center" type="text" :value="producto.deposito.toFixed(2) + '%'" @input="update('deposito',$event)">
        <label for="input-impDeposito"></label>
        <input disabled id="input-impDeposito" type="text">
      </div>
      <div class="main-input-group">
        <label for="input-admin">Administración</label>
        <input id="input-admin" class="text-center" type="text">
        <label for="input-impAdmin"></label>
        <input disabled id="input-impAdmin" type="text">
      </div>
      <div class="main-input-group">
        <label for="input-gps">GPS</label>
        <input id="input-gps" class="text-center" type="text" :value="producto.gps.toFixed(2)" @input="update('gps',$event)">
        <label for="input-impGps"></label>
        <input disabled id="input-impGps" type="text">
      </div>
      <div class="main-input-group">
        <label for="input-seguroAuto">SeguroAuto</label>
        <input id="input-seguroAuto" class="text-center" type="text">
        <label for="input-impSeguroAuto"></label>
        <input disabled id="input-impSeguroAuto" type="text">
      </div>
      <div class="main-input-group" style="margin-bottom: 10px;">
        <label for="input-valorRescate">ValorRescate</label>
        <input id="input-valorRescate" class="text-center" type="text">
        <label for="input-impValorRescate"></label>
        <input disabled id="input-impValorRescate" type="text">
      </div>
      <div class="main-input-group">
        <label for="input-descuento">Descuento</label>
        <input id="input-descuento" type="text">
        <label for="input-impDescuento"></label>
        <input disabled id="input-impDescuento" type="text">
      </div>
      <div style="text-align: right;"><hr style="border-top: #000000 solid 1px; width: 75px"></div>
      <div class="main-input-group">
        <label for="input-total">Total Primer Pago</label>
        <input id="input-total" type="text">
      </div>
    </div><!-- section-content -->
  </section>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import { mapActions, mapMutations, mapState } from 'vuex';

export default{
  name: 'producto',
  data() {
    return {
      foundProducto: false,
      fondeador: '',
      noPagos: 0,
      periodicidad: '',
      valorOperacion: 0,
    }
  },
  computed: {
    ...mapState(['producto'])
  },
  methods: {
    ...mapActions(['fetchProducto']),
    ...mapMutations(['setProducto']),
    update(key, event) {
      this.producto[key] = event.target.value;
      this.setProducto({ [key]: event.target.value });
    },
    checkProducto(){
      if(this.producto.producto==='auto'){
        this.foundProducto = true;
        this.fetchProducto();
      }
    }
  }
}
</script>


<style scoped>
.main-input-group:first-child {
  margin-bottom: 0.75rem;
}

i {
  position: relative;
  top: -2px;
  color: #fff;
}
</style>
