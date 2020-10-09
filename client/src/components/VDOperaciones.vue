<template>
  <div class="vd">
    <h1>Operaciones</h1>
    <table class="just-header table">
      <tbody>
      <tr>
        <th style="width: 40px">Operación</th>
        <th style="width: 80px">Fecha</th>
        <th style="width: 80px">No.Pagos</th>
        <th style="width: 80px">Referencia</th>
        <th style="width: 80px">Cliente</th>
        <th style="width: 80px">Descripción</th>
        <th style="width: 80px">Fondeador</th>
        <th style="width: 80px">ValorOperación</th>
      </tr>
      </tbody>
    </table>
    <div class="table-wrapper">
      <table class="table">
        <tbody>
        <tr v-for="i in 100" :key="i">
          <td style="width: 40px">{{400 + i}}</td>
          <td style="width: 80px">20-May-2020</td>
          <td style="width: 80px">300</td>
          <td style="width: 80px">RF</td>
          <td style="width: 80px">GPI</td>
          <td style="width: 80px">Auto comercial</td>
          <td style="width: 80px">Fondeador</td>
          <td style="width: 80px">500</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VDOperaciones',
  data: () => ({
    fab: false
  }),
};
</script>

<style lang="scss" scoped>
.vd {
  width: 1200px;
  height: 800px;
  background: #e5e5e5;
  margin: 16px;
  padding: 1rem;
}

.table {
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;

  td, th {
    padding: 0 .75rem;
  }
}

.table-wrapper {
  height: 700px;
  overflow: auto;
  direction: rtl;

  table {
    direction: ltr;
  }

  table, table td {
    background: #ffffff;
    border: 1px solid var(--gray-subnav);
  }
}

th, td {
  padding-top: 0;
  padding-bottom: 0;
}
</style>