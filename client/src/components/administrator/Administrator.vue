<template>
  <div id="admin" class="p-5">
    <div id="navbar">
      <nav class="navbar navbar-expand-lg navbar-light bg-light bar">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <span class="nav-link active">Privilegios</span>
            </li>
            <li class="nav-item">
              <span class="nav-link">Usuarios</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <privileges></privileges>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import Privileges from "./components/Privileges.vue";

@Component({
  components: {
    Privileges,
  },
})
export default class Administrator extends Vue {}
</script>

<style scoped>
#title {
  text-align: left;
}
.bar {
  font-size: large;
}
</style>