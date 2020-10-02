<template>
  <div class="home">
    <main-form></main-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainForm from '@/components/MainForm.vue'; // @ is an alias to /src

@Component({
  components: {
    MainForm,
  },
})
export default class Home extends Vue {}
</script>
