<template>
  <div class="log-in">
    <login></login>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Login from "@/components/Log-in.vue"; // @ is an alias to /src

@Component({
  components: {
    Login,
  },
})
export default class Home extends Vue {}
</script>