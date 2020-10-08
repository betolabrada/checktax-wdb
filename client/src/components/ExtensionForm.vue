<template>
    <div class="main-form">
        <div class="section-header-1">
            Más 
        </div>
        <div class="section-divided">
            <div class="left-side">
                <div class="section-header">
                    Garantía
                </div>
                <Garantia></Garantia>
            </div>
            <div class="right-side">
                <div class="section-header">
                    Otros
                </div>
                <Otros></Otros>
            </div>
        </div>
        <div class="section-header">
            Crédito
        </div>
        <Credito></Credito>
        <div class="section-header">
            Cobranza
        </div>
        <Cobranza></Cobranza>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Garantia from "@/components/ExtensionForm/Garantia";
import Cobranza from "@/components/ExtensionForm/Cobranza";
import Credito from "@/components/ExtensionForm/Credito";
import Otros from "@/components/ExtensionForm/Otros";

@Component({})
export default class ExtensionForm extends Vue {}
</script>