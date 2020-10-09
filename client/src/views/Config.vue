<template>
  <div class="config">
    <config-form></config-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ConfigForm from '@/components/ConfigForm.vue';
export default Vue.extend({
  components: {
    ConfigForm,
  }
})
</script>
