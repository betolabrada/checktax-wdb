<template>
    <div class="ManejoClientes">
        <manejo-clientes></manejo-clientes>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ManejoClientes from '@/components/ManejoClientes.vue'; // @ is an alias to /src

@Component({
  components: {
    ManejoClientes,
  },
})
export default class ManejoCliente extends Vue {}
</script>

