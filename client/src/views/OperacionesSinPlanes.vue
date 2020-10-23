<template>
    <div class="Operaciones Sin Plan">
        <operaciones-sin-plan></operaciones-sin-plan>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import OperacionesSinPlan from '@/components/OperacionesSinPlan.vue'; // @ is an alias to /src

@Component({
  components: {
    OperacionesSinPlan,
  },
})
export default class OperacionesSinPlanes extends Vue {}
</script>
