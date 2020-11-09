<template>
    <div class="temporal">
        <temp></temp>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Temp from '@/components/Temp.vue'; // @ is an alias to /src

@Component({
  components: {
    Temp,
  },
})
export default class Temporal extends Vue {}
</script>
