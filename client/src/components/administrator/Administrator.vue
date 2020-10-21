<template>
  <section class="privilages">
    <div class="windowTitle section-header">
      <i class="fa fa-unlock-alt" id="windowLock"></i> Permisos de Operación
    </div>
    <div class="section-content">
      <div class="search">
        <label class="sectionLabel"> Usuario</label><br>
        <input type="text" id="userField">
<!--        <button @click="openModal" type="button" class="btn btn-outline-success btn-lg" id="addButton"> Agregar <i class="fa fa-plus"></i></button>-->
<!--        <b-modal ref="my-modal" size="xl" hide-footer title="Datos generales del usuario">-->
<!--          <form>-->
<!--            <div>-->
<!--              <label for="name">Nombre</label><br>-->
<!--              <input type="text" class="form-control" id="name">-->
<!--            </div><br>-->
<!--            <div>-->
<!--              <label for="lastName">Apellido</label>-->
<!--              <input type="text" class="form-control" id="lastName">-->
<!--            </div><br>-->
<!--            <div>-->
<!--              <label for="userEmail">Dirección email</label>-->
<!--              <input type="email" class="form-control" id="userEmail"  placeholder="Email">-->
<!--            </div><br>-->
<!--            <div>-->
<!--              <label for="password">Contraseña</label>-->
<!--              <input type="password" class="form-control" id="password"  placeholder="* * * * * * * * * *">-->
<!--            </div><br>-->
<!--            <button type="submit" class="btn btn-primary">Guardar</button>-->
<!--          </form>-->
<!--        </b-modal>-->
      </div>
      <div class="row d-flex">
        <div class="col-sm section-content">
          <div class="sectionTitle">
            <h5 class="sectionLabel"><i class="fa fa-credit-card sectionIcon"></i> Financiamiento</h5>
          </div>
          <div class="sectionPrivilages">
            <div class="input-group d-flex">
              <input type="checkbox" id="AltaOperaciones">
              <label for="AltaOperaciones" class="privilageLabel">Alta Operaciones</label>
            </div>

            <div class="input-group d-flex">
              <input type="checkbox" id="guardarCambios">
              <label for="guardarCambios" class="privilageLabel">Guardar Cambios</label>
            </div>

            <div class="input-group d-flex">
              <input type="checkbox" id="datosGenerales">
              <label for="datosGenerales" class="privilageLabel">Datos Generales</label>
            </div>

            <div class="input-group d-flex">
              <input type="checkbox" id="Financiamiento">
              <label for="Financiamiento" class="privilageLabel">Financiamiento</label>
            </div>

            <div class="input-group d-flex">
              <input type="checkbox" id="seguros">
              <label for="seguros" class="privilageLabel">Seguros</label>
            </div>

            <div class="input-group d-flex">
              <input type="checkbox" id="lotesAutos">
              <label for="lotesAutos" class="privilageLabel">Lotes Autos</label>
            </div>

            <div class="input-group d-flex">
              <input type="checkbox" id="referenciasBancos">
              <label for="referenciasBancos" class="privilageLabel">Referencias Bancos</label>
            </div>

            <div class="input-group d-flex">
              <input type="checkbox" id="garantia">
              <label for="garantia" class="privilageLabel">Garantía</label>
            </div>

            <div class="input-group d-flex">
              <input type="checkbox" id="credito">
              <label for="credito" class="privilageLabel">Crédito</label>
            </div>

            <div class="input-group d-flex">
              <input type="checkbox" id="cobranza">
              <label for="cobranza" class="privilageLabel">Cobranza</label>
            </div>

            <div class="input-group d-flex">
              <input type="checkbox" id="otros">
              <label for="otros" class="privilageLabel">Otros</label>
            </div>

            <div class="input-group d-flex">
              <input type="checkbox" id="generarPlanPagos">
              <label for="generarPlanPagos" class="privilageLabel">Generar Plan Pagos</label>
            </div>

            <div class="input-group d-flex">
              <input type="checkbox" id="cambiarNombres">
              <label for="cambiarNombres" class="privilageLabel">Cambiar Nombres</label>
            </div>

            <div class="input-group d-flex">
              <input type="checkbox" id="cambiarReferencias">
              <label for="cambiarReferencias" class="privilageLabel">Cambiar Referencias</label>
            </div>
          </div>
          <br>
        </div>
        <div class="col-sm section-content">
          <div class="sectionTitle">
            <h1 class="sectionLabel"><i class="fas fa-money-check-alt"></i> Pagos individuales</h1>
          </div>
          <div class="sectionPrivilages">
            <div class="input-group d-flex">
              <input type="checkbox" id="aplicarPagos">
              <label for="aplicarPagos" class="privilageLabel">Aplicar Pagos</label>
            </div>
            <div class="input-group d-flex">
              <input type="checkbox" id="ventanaPagos">
              <label for="ventanaPagos" class="privilageLabel">Ventana Pagos</label>
            </div>
            <div class="input-group d-flex">
              <input type="checkbox" id="aplicarAdjudicación">
              <label for="aplicarAdjudicación" class="privilageLabel">Aplicar Adjudicación</label>
            </div>
            <div class="input-group d-flex">
              <input type="checkbox" id="ventanaAdjudicaciones">
              <label for="ventanaAdjudicaciones" class="privilageLabel">Ventana Adjudicaciones</label>
            </div>
            <div class="input-group d-flex">
              <input type="checkbox" id="aplicarLiquidaciones">
              <label for="aplicarLiquidaciones" class="privilageLabel">Aplicar Liquidaciones</label>
            </div>
            <div class="input-group d-flex">
              <input type="checkbox" id="ventanaLiquidaciones">
              <label for="ventanaLiquidaciones" class="privilageLabel">Ventana Liquidaciones</label>
            </div>
          </div>
          <br>
          <div class="sectionTitle">
            <h1 class="sectionLabel"><i class="fas fa-hand-holding-usd"></i> Cobranza</h1>
          </div>
          <div class="sectionPrivilages">
            <div class="input-group d-flex">
              <input type="checkbox" id="aplicarPagosCobranza">
              <label for="aplicarPagosCobranza" class="privilageLabel">Aplicar Pagos</label>
            </div>
            <br>
            <div class="sectionTitle">
              <h1 class="sectionLabel"><i class="fa fa-university"></i> Inventario Adjudicación</h1>
            </div>
            <div class="sectionPrivilages">
              <div class="input-group d-flex">
                <input type="checkbox" id="desplegar">
                <label for="desplegar" class="privilageLabel">Desplegar</label>
              </div>
              <div class="input-group d-flex">
                <input type="checkbox" id="guardarCambiosInventario">
                <label for="guardarCambiosInventario" class="privilageLabel">Guardar Cambios</label>
              </div>
            </div>
            <br>
          </div>
        </div><!--.col-sm.section-content-->
        <div class="col-sm section-content">
          <div class="sectionTitle">
            <h1 class="sectionLabel"><i class="fas fa-wallet"></i> Chequera</h1>
          </div>
          <div class="sectionPrivilages">
            <div class="input-group d-flex">
              <input type="checkbox" id="altaMovimientos">
              <label for="altaMovimientos" class="privilageLabel">Alta Movimientos</label>
            </div>
            <div class="input-group d-flex">
              <input type="checkbox" id="cambiosMovimientos">
              <label for="cambiosMovimientos" class="privilageLabel">Cambios Movimientos</label>
            </div>
            <div class="input-group d-flex">
              <input type="checkbox" id="bajaMovimientos">
              <label for="bajaMovimientos" class="privilageLabel">Baja Movimientos</label>
            </div>
            <div class="input-group d-flex">
              <input type="checkbox" id="guardarCambiosChequera">
              <label for="guardarCambiosChequera" class="privilageLabel">Guardar Cambios</label>
            </div>
            <div class="input-group d-flex">
              <input type="checkbox" id="guardarArchivoTemporal">
              <label for="guardarArchivoTemporal" class="privilageLabel">Guardar Archivo Temporal</label>
            </div>
            <div class="input-group d-flex">
              <input type="checkbox" id="sincronizar">
              <label for="sincronizar" class="privilageLabel">Sincronizar</label>
            </div>
          </div>
          <br>
        </div><!--.col-sm.section-content-->
        <div class="col-sm section-content">
          <div class="sectionTitle">
            <h1 class="sectionLabel"><i class="fa fa-cogs"></i> Configuración</h1>
          </div>
          <div class="sectionPrivilages">
            <div class="input-group d-flex">
              <input type="checkbox" id="fondeadores">
              <label for="fondeadores" class="privilageLabel">Fondeadores</label>
            </div>
            <div class="input-group d-flex">
              <input type="checkbox" id="aplicacionPagos">
              <label for="aplicacionPagos" class="privilageLabel">Aplicación Pagos</label>
            </div>
            <div class="input-group d-flex">
              <input type="checkbox" id="valoresDefault">
              <label for="valoresDefault" class="privilageLabel">Valores Default</label>
            </div>
            <div class="input-group d-flex">
              <input type="checkbox" id="baseMoratorios">
              <label for="baseMoratorios" class="privilageLabel">Base Moratorios</label>
            </div>
            <div class="input-group d-flex">
              <input type="checkbox" id="prepago">
              <label for="prepago" class="privilageLabel">Pre-Pago</label>
            </div>
            <div class="input-group d-flex">
              <input type="checkbox" id="seguroAutosConfig">
              <label for="seguroAutosConfig" class="privilageLabel">Seguro Autos</label>
            </div>
            <div class="input-group d-flex">
              <input type="checkbox" id="lotesAutosConfig">
              <label for="lotesAutosConfig" class="privilageLabel">Lotes Autos</label>
            </div>
            <div class="input-group d-flex">
              <input type="checkbox" id="referenciasBancariasConfig">
              <label for="referenciasBancariasConfig" class="privilageLabel">Referencias Bancarias</label>
            </div>
            <div class="input-group d-flex">
              <input type="checkbox" id="calificacionBuro">
              <label for="calificacionBuro" class="privilageLabel">Calificación Buró</label>
            </div>
            <div class="input-group d-flex">
              <input type="checkbox" id="adjudicacionesConfig">
              <label for="adjudicacionesConfig" class="privilageLabel">Adjudicaciones</label>
            </div>
            <div class="input-group d-flex">
              <input type="checkbox" id="permisosOperacionConfig">
              <label for="permisosOperacionConfig" class="privilageLabel">Permisos Operación</label>
            </div>
            <div class="input-group d-flex">
              <input type="checkbox" id="estatusCarteraAct">
              <label for="estatusCarteraAct" class="privilageLabel">Estatus Cartera Act</label>
            </div>
          </div>
          <br>
        </div><!--.col-sm.section-content-->
      </div><!--.row.d-flex-->
    </div><!--.section-content-->
  </section>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
  methods:{
    openModal() {
      this.$refs['my-modal'].show()
    }, 
    closeModal() {
      this.$refs['my-modal'].hide()
    }
  },
})
export default class Administrator extends Vue {
}
</script>


<style scoped>

* {
  box-sizing: border-box;
}

.search {
  padding-left: 2rem;
}

.sectionLabel {
  margin: 0;
  font-size: 2rem;
  color: black;
}

#userField {
  width: 15rem;
  height: 3rem;
}

#addButton {
  float: right;
  margin-right: 2rem;
}

.windowTitle {
  width: 100%;
  padding-left: 1.2rem;
  background: var(--gray-nav);
}

#windowLock {
  color: orange;
}


input[type="checkbox"] {
  width: 15px;
  margin: 0;
  padding: 0;
  align-self: flex-start;
}

.titleText{
  color: white;
  margin-bottom: 1.5rem;
  transform: translateY(50%);
}

.windowTitle{
  padding-left: 1.2rem;
  background: var(--gray-nav);

}

.input-group.d-flex label {
  align-self: center;
}

</style>
