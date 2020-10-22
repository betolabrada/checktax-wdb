<template>
  <div class="home d-inline-flex">
    <div class="main-form-container d-flex justify-content-center">
      <main-form @clickHeader="extensionActive = !extensionActive"></main-form>
      <extension-form v-if="extensionActive"></extension-form>
    </div>
    <v-d-nav @navChanged="currentVD = $event"></v-d-nav>
    <div class="vd-container">
      <v-d-operaciones v-if="currentVD === 'operaciones'"></v-d-operaciones>
      <v-d-cotizaciones v-if="currentVD === 'cotizaciones'"></v-d-cotizaciones>
      <alta-cliente v-if="currentVD === 'altaCliente'"></alta-cliente>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainForm from '@/components/MainForm.vue';
import VDNav from '@/components/nav/VDNav.vue';
import VDOperaciones from '@/components/VDOperaciones.vue';
import VDCotizaciones from '@/components/VDCotizaciones.vue';
import ExtensionForm from '@/components/ExtensionForm.vue'; // @ is an alias to /src
import AltaCliente from '@/components/AltaCliente.vue';

@Component({
  components: {
    ExtensionForm,
    VDCotizaciones,
    VDOperaciones,
    VDNav,
    MainForm,
    AltaCliente
  },
})
export default class Home extends Vue {
  private currentVD = 'operaciones';
  private extensionActive = false;
}
</script>

<style scoped>

</style>
