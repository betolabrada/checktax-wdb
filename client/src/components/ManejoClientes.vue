<template>
    <div class="main-form">
        <div class="d-flex justify-content-between">
            <h2>Corrección Nombre Clientes</h2>
            <div class="align-items-end">
                <button type="button" style="color:red; background-color:black">Corregir</button>
            </div>
        </div>
        <div class="d-flex">
            <label>La corrección se realizará en las BDatos de: Contactos - Finanzas - Chequera</label>
        </div>
        <div class="d-flex">
            <label>Los Nombres NO pueden variar significativamente</label>
        </div>
        <div class="d-flex">
            <div class="d-block">
                <label style="color: red" for="clientecambiar">Escriba el Nombre del Cliente que Desea Cambiar: </label>
                <input id="clientecambiar" type="text">
            </div>
        </div>
        <div class="d-flex">
            <div class="d-block">
                <label style="color: green" for="clientecorregir">Escriba el Nombre del Cliente como Desea que Quede Corregido: </label>
                <input id="clientecorregir" type="text">
            </div>
        </div>
        <div class="d-flex">
            <label>Estructuras de los Nombres de Clientes</label>
        </div>
        <div class="d-flex">
            <div class="d-block">
                <label style="color: red" for="Original">Original</label>
                <div class="d-flex">
                    <input id="original1" type="text" disabled>
                    <input id="original2" type="text" disabled>
                    <input id="original3" type="text" disabled>
                    <input id="original4" type="text" disabled>
                    <input id="original5" type="text" disabled>
                    <input id="original6" type="text" disabled>
                </div>
            </div>
        </div>
        <div class="d-flex">
            <div class="d-block" style="margin-down: 1rem">
                <label style="color: green" for="Corregido">Corregido</label>
                <div class="d-flex">
                    <input id="corregido1" type="text" disabled>
                    <input id="corregido2" type="text" disabled>
                    <input id="corregido3" type="text" disabled>
                    <input id="corregido4" type="text" disabled>
                    <input id="corregido5" type="text" disabled>
                    <input id="corregido6" type="text" disabled>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-end">
            <h3 style="color: green">Aceptado</h3>
        </div>
        <div style="border-top: 4px solid black; margin: 5px"></div>
        <div class="d-flex justify-content-between">
            <h2>Corrección de Referencias Bancarias</h2>
            <div class="align-items-end ">
                <button type="button" style="color:red; background-color:black">Corregir</button>
            </div>
        </div>
        <div class="d-flex">
            <label>La corrección se realizará en las BDatos de: Finanzas - Chequera</label>
        </div>
        <div class="d-flex">
            <label>Los Referencias NO pueden variar significativamente</label>
        </div>
        <div class="d-flex">
            <div class="section-left d-flex flex-column" style="width: 50%; margin: 10px">
                <div>
                    <label class="d-block" style="color:orange" for="nombrecliente">Escriba el Nombre del Cliente</label>
                    <input class="d-block" id="nombrecliente" type="text">
                </div>
                <div>
                    <label class="d-block" style="color:red" for="referenciacliente">Escriba la Referencia del Cliente que Desea Cambiar: </label>
                    <input class="d-block" id="referenciacliente" type="text">
                </div>
                <div>
                    <label class="d-block" style="color:green" for="referenciaclientecor">Escriba la Referencia del Cliente como Desea que Quede Corregida: </label>
                    <input class="d-block" id="referenciaclientecor" type="text">
                </div>
            </div>
            <div class="section-right d-flex flex-column">
                <div class="d-flex justify-content-center">
                    <label>Referencias Bancarias</label>
                </div>
                <div style="border-top: 2px solid black"></div>
                <br>
                <div class="d-flex">
                    <label style="color: orange; width: 50%">Operaciones</label>
                    <label style="color: red; width: 50%">Plan de Pagos</label>
                </div>
                <div class="d-flex">
                    <input id="oper1" type="text" style="width: 50%" disabled>
                    <input id="planp1" type="text" style="width: 50%" disabled>
                </div>
                <div class="d-flex">
                    <input id="oper2" type="text" style="width: 50%" disabled>
                    <input id="planp2" type="text" style="width: 50%" disabled>
                </div>
                <div class="d-flex">
                    <input id="oper3" type="text" style="width: 50%" disabled>
                    <input id="planp3" type="text" style="width: 50%" disabled>
                </div>
                <div class="d-flex">
                    <input id="oper4" type="text" style="width: 50%" disabled>
                    <input id="planp4" type="text" style="width: 50%" disabled>
                </div>
                <div class="d-flex">
                    <input id="oper5" type="text" style="width: 50%" disabled>
                    <input id="planp5" type="text" style="width: 50%" disabled>
                </div>
                <div class="d-flex">
                    <input id="oper6" type="text" style="width: 50%" disabled>
                    <input id="planp6" type="text" style="width: 50%" disabled>
                </div>
                <div class="d-flex">
                    <input id="oper7" type="text" style="width: 50%" disabled>
                    <input id="planp7" type="text" style="width: 50%" disabled>
                </div>
                <div class="d-flex">
                    <input id="oper8" type="text" style="width: 50%" disabled>
                    <input id="planp8" type="text" style="width: 50%" disabled>
                </div>
                <div class="d-flex">
                    <input id="oper9" type="text" style="width: 50%" disabled>
                    <input id="planp9" type="text" style="width: 50%" disabled>
                </div>
                <div class="d-flex justify-content-start">
                    <h3 style="color: green">Aceptado</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default class ManejoClientes extends Vue{}   
</script>