<template>
  <div class="home d-inline-flex">
    <div class="main-form-container d-flex justify-content-center">
      <main-form @clickHeader="handleNavEvent($event)"></main-form>
      <extension-form v-if="extensionActive"></extension-form>
    </div>
    <v-d-nav @navChanged="currentVD = $event"></v-d-nav>
    <div class="vd-container">
      <v-d-operaciones v-if="currentVD === 'operaciones'"></v-d-operaciones>
      <v-d-cotizaciones v-if="currentVD === 'cotizaciones'"></v-d-cotizaciones>
      <alta-cliente v-if="currentVD === 'altaCliente'"></alta-cliente>
      <manejo-cliente v-if="currentVD === 'manejoCliente'"></manejo-cliente>
      <v-d-operaciones-sin-plan v-if="currentVD === 'operacionesSinPlan'"></v-d-operaciones-sin-plan>
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
import ManejoCliente from '@/views/ManejoCliente.vue';
import { mapActions } from 'vuex';
import VDOperacionesSinPlan from '@/components/OperacionesSinPlan.vue';

@Component({
  components: {
    VDOperacionesSinPlan,
    ManejoCliente,
    ExtensionForm,
    VDCotizaciones,
    VDOperaciones,
    VDNav,
    MainForm,
    AltaCliente
  },
  methods: {
    ...mapActions(['postOperacion'])
  }
})
export default class Home extends Vue {
  private currentVD = 'operaciones';
  private extensionActive = false;
  postOperacion!: () => any;

  handleNavEvent($event: string) {
    if ($event === 'expand') {
      this.extensionActive = !this.extensionActive;
    } else if ($event === 'save') {
      // POST or PUT
      this.postOperacion();
    }
  }
}
</script>

<style scoped>

</style>
