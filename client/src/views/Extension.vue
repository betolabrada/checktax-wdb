<template>
  <div class="extension">
    <extension-form></extension-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ExtensionForm from '@/components/ExtensionForm.vue'; // @ is an alias to /src

@Component({
  components: {
    ExtensionForm,
  },
})
export default class Extension extends Vue {}
</script>
