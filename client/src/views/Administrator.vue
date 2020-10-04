<template>
  <div>
    <administrator></administrator>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import administrator from "@/components/administrator/Administrator.vue"; // @ is an alias to /src

@Component({
  components: {
    administrator,
  },
})
export default class Admin extends Vue {}
</script>
