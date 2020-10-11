<template>
  <altaCliente></altaCliente>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import altaCliente from "@/components/AltaCliente.vue"; // @ is an alias to /src

@Component({
  components: {
    altaCliente,
  },
})
export default class Admin extends Vue {}
</script>