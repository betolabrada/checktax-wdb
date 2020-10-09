<template>
  <div class="home d-inline-flex">
    <main-form></main-form>
    <v-d-nav></v-d-nav>
    <v-d-operaciones></v-d-operaciones>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainForm from '@/components/MainForm.vue';
import VDNav from '@/components/nav/VDNav.vue';
import VDOperaciones from '@/components/VDOperaciones.vue'; // @ is an alias to /src

@Component({
  components: {
    VDOperaciones,
    VDNav,
    MainForm,
  },
})
export default class Home extends Vue {}
</script>
