<template>
  <div class="config-form d-inline-flex flex-column">
    <div class="section-header main-title">
      Configuración de Módulo de Finanzas
    </div>
    <div class="d-flex">
      <section class="section-config">
        <fondeadores></fondeadores>
        <div class="d-flex">
          <div class="left-side">
            <aplicar-pagos></aplicar-pagos>
            <base-moratorios></base-moratorios>
            <ref-bancarias style="margin-bottom: 1.75px"></ref-bancarias>
            <estatus-cartera></estatus-cartera>
          </div>
          <div class="right-side">
            <valores-default-fin></valores-default-fin>
            <liquidaciones></liquidaciones>
            <seguros-autos></seguros-autos>
            <config-lote-autos></config-lote-autos>
            <calif-buro></calif-buro>
          </div>
        </div>
      </section>
      <section class="section-users">
        <administrator></administrator>
      </section>
    </div>
  </div>
</template>


<style scoped>
.config-form {
  background: #e5e5e5;
  margin: 16px;
}

.main-title {
  background: #000000;
}

.left-side {
  height: 750px;
}

.right-side {
  width: 420px;
}

.section-config {
  border: #000000 solid 4px;
  border-right: #000000 solid 2px;
}

.section-users {
  width: 100%;
  border: #000000 solid 4px;
  border-left: #000000 solid 2px;
}

</style>
<script>
import Fondeadores from '@/components/ConfigForm/Fondeadores';
import AplicarPagos from '@/components/ConfigForm/AplicarPagos';
import BaseMoratorios from '@/components/ConfigForm/BaseMoratorios';
import RefBancarias from '@/components/ConfigForm/RefBancarias';
import EstatusCartera from '@/components/ConfigForm/EstatusCartera';
import ValoresDefaultFin from '@/components/ConfigForm/ValoresDefaultFin';
import Liquidaciones from '@/components/ConfigForm/Liquidaciones';
import SegurosAutos from '@/components/ConfigForm/SegurosAutos';
import ConfigLoteAutos from '@/components/ConfigForm/ConfigLoteAutos';
import CalifBuro from '@/components/ConfigForm/CalifBuro';
import Administrator from '@/components/administrator/Administrator';

export default {
  components: {
    Administrator,
    CalifBuro,
    ConfigLoteAutos,
    SegurosAutos,
    Liquidaciones,
    ValoresDefaultFin,
    EstatusCartera,
    RefBancarias,
    BaseMoratorios,
    AplicarPagos,
    Fondeadores
  }
};
</script>
