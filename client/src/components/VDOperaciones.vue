<template>
  <div class="vd">
    <h1>Cotizaciones</h1>
    <table class="table-fixed">
      <thead>
      <tr>
        <th>Cotización</th>
        <th>Fecha</th>
        <th>No.Pagos</th>
        <th>Referencia</th>
        <th>Cliente</th>
        <th>Descripción</th>
        <th>Fondeador</th>
        <th>ValorOperación</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="i in 100" :key="i">
        <td>Cotización</td>
        <td>Fecha</td>
        <td>No.Pagos</td>
        <td>Referencia</td>
        <td>Cliente</td>
        <td>Descripción</td>
        <td>Fondeador</td>
        <td>ValorOperación</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'VDOperaciones'
};
</script>

<style scoped>
.vd {
  width: 1000px;
  height: 600px;
  background: #e5e5e5;
  margin: 16px;
}

table {
  width: 100%;
  border-spacing: 0;
  padding: 0.8rem;
}

td {
  border: 1px solid var(--gray-subnav);
  background: #ffffff;
}


.table-fixed tbody {
  height: 80vh;
  overflow: auto;
  width: 100%;
}

.table-fixed thead,
.table-fixed tbody,
.table-fixed tr,
.table-fixed td,
.table-fixed th {
  display: block;
}

.table-fixed tbody td,
.table-fixed tbody th,
.table-fixed thead > tr > th {
  float: left;
  position: relative;
}
</style>
