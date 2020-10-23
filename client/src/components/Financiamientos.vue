<template>
    <div class="main-form">
        <div class="d-flex">
            <div class="d-flex flex-column">
                <br>
                <label>Mensualidad</label>
                <label>Anticipo</label>
                <label>Seguro Deuda</label>
                <label>Apertura</label>
                <label>Depósito</label>
                <label>Administración</label>
                <label>GPS</label>
                <label>Seguro Auto</label>
                <label>Valor Rescate</label>
                <label>Descuento</label>
            </div>
            <div class="d-flex flex-column align-content-center">
                <label>%</label>
                <br>
                <input style="margin:3px" id="anticipo" type="number">
                <input style="margin:3px" id="segurode" type="number">
                <input style="margin:3px" id="apertura" type="number">
                <input style="margin:3px" id="deposito" type="number">
                <input style="margin:3px" id="administracion" type="number">
                <input style="margin:3px" id="gps" type="number">
                <input style="margin:3px" id="seguroauto" type="number">
                <input style="margin:3px" id="valorrescate" type="number">
                <input style="margin:3px" id="descuento" type="number">
                <br>
                <label>Total Primer Pago</label>
            </div>
            <div class="d-flex flex-column">
                <label>Importe</label>
                <input style="margin:2px; margin-bottom:3px; margin-top:0px" id="mensualidadi" type="number" disabled>
                <input style="margin:2px; margin-bottom:3px; margin-top:2px" id="anticipoi" type="number" disabled>
                <input style="margin:2px; margin-bottom:3px; margin-top:2px" id="segurodei" type="number" disabled>
                <input style="margin:2px; margin-bottom:3px; margin-top:2px" id="aperturai" type="number" disabled>
                <input style="margin:2px; margin-bottom:3px; margin-top:2px" id="depositoi" type="number" disabled>
                <input style="margin:2px; margin-bottom:3px; margin-top:2px" id="administracioni" type="number" disabled>
                <input style="margin:2px; margin-bottom:3px; margin-top:2px" id="gpsi" type="number" disabled>
                <input style="margin:2px; margin-bottom:3px; margin-top:2px" id="seguroautoi" type="number" disabled>
                <input style="margin:2px; margin-bottom:3px; margin-top:2px" id="valorrescatei" type="number" disabled>
                <input style="margin:2px; margin-bottom:5px; margin-top:2px" id="descuentoi" type="number" disabled>
                <div style="border-top: 4px solid black; margin: 3px"></div>
                <input style="margin:3px" id="totalprimerpago" type="number" disabled>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class Financiamientos extends Vue{}   
</script>
