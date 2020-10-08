<template>
    <div class="section-body">
        <div class="section-row">
            <div class="form-group">
                <label for="input-analista">Analista</label>
                <input id="input-analista" type="text">
            </div>
        </div>
        <div class="section-row">
            <div style="width: 75px; margin-top: 10px"><label>Importe Crédito</label></div>
        </div>
        <div class="section-row">
            <div class="form-group">
                <label for="input-ciudad">Ciudad</label>
                <input id="input-ciudad" type="text">
            </div>
            <div class="form-group">
                <label for="input-solicitado">Solicitado</label>
                <input id="input-solicitadi" type="text">
            </div>
        </div>
        <div class="section-row">
            <div class="form-group">
                <label for="input-sucursal">Sucursal</label>
                <input id="input-sucursal" type="text">
            </div>
            <div class="form-group">
                <label for="input-autorizado">Autorizado</label>
                <input id="input-autorizado" type="text">
            </div>
        </div>
        <div class="section-row">
            <div class="form-group">
                <label for="input-canalventa">Canal Venta</label>
                <input id="input-canalventa" type="text">
            </div>
            <div class="form-group">
                <label for="input-fechafondeo">Fecha Fondeo</label>
                <input id="input-fechafondeo" type="text">
            </div>
        </div>
        <div class="section-row">
            <div class="form-group">
                <label for="input-contacto">Contacto</label>
                <input id="input-contacto" type="text">
            </div>
            <div class="form-group">
                <label for="input-estatuscred">Estatus Crédito</label>
                <input id="input-estatuscred" type="text">
            </div>
        </div>
        <div class="section-row">
            <div class="form-group">
                <label for="input-tipoasesor">Tipo Asesor</label>
                <input id="input-tipoasesor" type="text">
            </div>
            <div class="form-group">
                <label for="input-estatuscartera">Estatus Cartera</label>
                <input id="input-estatuscartera" type="text">
            </div>
        </div>
        <div class="section-row">
            <div class="form-group">
                <label for="input-cappago">% Cap Pago</label>
                <input id="input-cappago" type="text">
            </div>
            <div style="width: 75px; margin-top: 10px"><label>Investigación</label></div>
        </div>
        <div class="section-row">
            
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class Credito extends Vue {}
</script>