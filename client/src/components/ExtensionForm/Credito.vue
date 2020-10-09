<template>
    <div class="section-content d-flex flex-column">
        <div class="d-flex">
            <div class="form-group d-block">
                <label for="input-analista">Analista</label>
                <input id="input-analista" type="text">
            </div>
        </div>
        <div class="d-flex justify-content-end">
            <div style="width: 75px; margin-top: 10px;"><label>Importe Crédito</label></div>
        </div>
        <div class="d-flex">
            <div class="d-flex flex-column align-items-end">
                <div class="form-group">
                    <label for="input-ciudad">Ciudad</label>
                    <input id="input-ciudad" type="text">
                </div>
                <div class="form-group">
                    <label for="input-sucursal">Sucursal</label>
                    <input id="input-sucursal" type="text">
                </div>
                <div class="form-group">
                    <label for="input-canalventa">Canal Venta</label>
                    <input id="input-canalventa" type="text">
                </div>
                <div class="form-group">
                    <label for="input-contacto">Contacto</label>
                    <input id="input-contacto" type="text">
                </div>
                <div class="form-group">
                    <label for="input-tipoasesor">Tipo Asesor</label>
                    <input id="input-tipoasesor" type="text">
                </div>
                <div class="form-group">
                    <label for="input-cappago">% Cap Pago</label>
                    <input id="input-cappago" type="text">
                </div>
                <div class="form-group">
                    <label for="input-scoreburo">Score Buró</label>
                    <input id="input-scoreburo" type="text">
                </div>
                <div class="form-group">
                    <label for="input-personalidad">Personalidad</label>
                    <input id="input-personalidad" type="text">
                </div>
                <div class="form-group">
                    <label for="input-garante">Garante</label>
                    <input id="input-garante" type="text">
                </div>
            </div>
            <div class="d-flex flex-column align-items-end">
                <div class="form-group">
                    <label for="input-solicitado">Solicitado</label>
                    <input id="input-solicitadi" type="text">
                </div>
                <div class="form-group">
                    <label for="input-autorizado">Autorizado</label>
                    <input id="input-autorizado" type="text">
                </div>
                <div class="form-group">
                    <label for="input-fechafondeo">Fecha Fondeo</label>
                    <input id="input-fechafondeo" type="text">
                </div>
                <div class="form-group">
                    <label for="input-estatuscred">Estatus Crédito</label>
                    <input id="input-estatuscred" type="text">
                </div>
                <div class="form-group">
                    <label for="input-estatuscartera">Estatus Cartera</label>
                    <input id="input-estatuscartera" type="text">
                </div>
                <div style="width: 75px; margin-top: 10px"><label>Investigación</label></div>
                <div class="d-flex flex-column">
                    <div class="form-group">
                        <input id="input-domicilio" type="checkbox">
                        <label for="input-domicilio">Domicilio</label>
                    </div>
                    <div class="form-group">
                        <input id="input-laboral" type="checkbox">
                        <label for="input-laboral">Laboral</label>
                    </div>
                    <div class="form-group">
                        <input id="input-domic/lab" type="checkbox">
                        <label for="input-domic/lab">Domic/Laboral</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class Credito extends Vue {}
</script>

<style scoped>
.form-group{
    margin: 0px;
}
input[type="checkbox"] {
  width: 15px;
  margin: 0;
  padding: 0;
  align-self: flex-start;
}
</style>