<template>
    <div class="section-content">
        <div class="d-flex justify-content-between">
            <div class="d-flex flex-column align-items-end">
                <div class="input-group green">
                    <label for="input-warning">Warning</label>
                    <input id="input-warning" type="text">
                </div>
                <div class="input-group green">
                    <label for="input-estatus">Estatus</label>
                    <input id="input-estatus" type="text">
                </div>            
                <div class="input-group green">
                    <label for="input-subestatus">SubEstatus</label>
                    <input id="input-subestatus" type="text">
                </div>
            </div>
            <div class="d-flex flex-column align-items-end">
                <div class="input-group green">
                    <label for="input-estatus2">Estatus</label>
                    <input id="input-estatus2" type="text">
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-between p-1">
            <div class="d-flex flex-column checkbox-group">
                <div class="input-group green d-flex">
                    <input id="input-especial" type="checkbox">
                    <label for="input-especial">Especial</label>
                </div>
                <div class="input-group green d-flex">
                    <input id="input-sinpago" type="checkbox">
                    <label for="input-sinpago">Sin Pago</label>
                </div>
                <div class="input-group green d-flex">
                    <input id="input-pagocero" type="checkbox">
                    <label for="input-pagocero">Pago Cero</label>
                </div>
            </div>
            <div class="d-flex flex-column">
                <div class="input-group green d-flex">
                    <input id="input-fraude" type="checkbox">
                    <label for="input-fraude">Fraude</label>
                </div>
                <div class="input-group green d-flex">
                    <input id="input-incobrable" type="checkbox">
                    <label for="input-incobrable">Incobrable</label>
                </div>
                <div class="input-group green d-flex">
                    <input id="input-quebranto" type="checkbox">
                    <label for="input-quebranto">Quebranto</label>
                </div>
            </div>
            <div class="d-flex flex-column">
                <div class="input-group green d-flex">
                    <input id="input-demanda" type="checkbox">
                    <label for="input-demanda">Demanda</label>
                </div>
                <div class="input-group green d-flex">
                    <input id="input-adjudicado" type="checkbox">
                    <label for="input-adjudicado">Adjudicado</label>
                </div>
                <div class="input-group green d-flex">
                    <input id="input-siniestro" type="checkbox">
                    <label for="input-siniestro">Siniestro</label>
                </div>
            </div>
        </div>
        <div class="input-group green" style="margin-top: 1rem">
            <label class="d-block" style="font-weight: 700" for="input-comentarios">Comentarios</label>
            <textarea class="d-block" id="input-comentarios"></textarea>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class Cobranza extends Vue {}
</script>

<style scoped>
.input-group{
    margin: 0px;
}
</style>