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
import Garantia from "@/components/ExtensionForm/Garantia.vue";
import Cobranza from "@/components/ExtensionForm/Cobranza.vue";
import Credito from "@/components/ExtensionForm/Credito.vue";
import Otros from "@/components/ExtensionForm/Otros.vue";

@Component({components: {
    Garantia,
    Cobranza,
    Credito,
    Otros,
},})
export default class ExtensionForm extends Vue {}
</script>

<style scoped>

.main-form {
  width: 360px;
  background: #e5e5e5;
  margin: 16px;
}

.section-divided {
  display: flex;
}

.left-side {
    width: 180px;
}

.right-side {
  width: 180px;
}

.section-header{
    background: #32463B;
}

.main-form{
    background: #AEC4B8;
}

input{
    background-color: #D7E2DB; 
}

.section-header-1{
    background: #000000;
    color: #ffffff;
}

</style>