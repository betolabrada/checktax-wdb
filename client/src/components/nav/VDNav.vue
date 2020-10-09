<template>
<div class="fab-container">
  <div class="fab-main fab-icon-holder" @click="navActive = !navActive">
    <i class="fas fa-bars d-flex justify-content-center align-items-center"></i>
  </div>
  <ul class="fab-options d-flex flex-column align-items-end" :class="{ visible: navActive }">
    <li class="d-inline-flex justify-content-end">
      <span class="fab-label">Operaciones</span>
      <div class="fab-icon-holder">
        <i class="fas fa-file-alt d-flex justify-content-center align-items-center"></i>
      </div>
    </li>
    <li class="d-inline-flex justify-content-end">
      <span class="fab-label">Cotizaciones</span>
      <div class="fab-icon-holder">
        <i class="fas fa-dollar-sign d-flex justify-content-center align-items-center"></i>
      </div>
    </li>
    <li class="d-inline-flex justify-content-end">
      <span class="fab-label">PlanPagos</span>
      <div class="fab-icon-holder">
        <i class="fas fa-tasks d-flex justify-content-center align-items-center"></i>
      </div>
    </li>
    <li class="d-inline-flex justify-content-end">
      <span class="fab-label">AltaCliente</span>
      <div class="fab-icon-holder">
        <i class="fas fa-user-plus d-flex justify-content-center align-items-center"></i>
      </div>
    </li>
    <li class="d-inline-flex justify-content-end">
      <span class="fab-label">Clientes</span>
      <div class="fab-icon-holder">
        <i class="fas fa-users d-flex justify-content-center align-items-center"></i>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
name: "VDNav",
  data() {
    return {
      navActive: false
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.fab-container {
  width: 70px;
}

.fab-icon-holder {
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background: #2c3e50;

  box-shadow: 0 6px 20px rgba(0,0,0,0.2);
}

.fab-icon-holder:hover {
  opacity: 0.8;
}

.fab-icon-holder i {
  font-size: 25px;
  color: #ffffff;
  height: inherit;
}

.fab-main {
  width: 60px;
  height: 60px;
}

.fab-options {
  list-style-type: none;
  margin: 0;

  opacity: 0;
  transition: all 0.3s ease;
}

.fab-options li {
  padding: 5px;
}

.fab-options.visible {
  opacity: 1;
}

.fab-label {
  padding: 2px 5px;
  align-self: center;
  user-select: none;
  white-space: nowrap;
  border-radius: 3px;
  font-size: 16px;
  background: #666666;
  color: #ffffff;
  box-shadow: 0 6px 20px rgba(0,0,0,0.2);
  margin-right: 10px;
}


</style>
