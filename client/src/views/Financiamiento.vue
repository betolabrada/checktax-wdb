<template>
    <div class="Financiamiento">
        <financiamientos></financiamientos>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Financiamientos from '@/components/Financiamientos.vue'; // @ is an alias to /src

@Component({
  components: {
    Financiamientos,
  },
})
export default class Financiamiento extends Vue {}
</script>
