<template>
  <div class="vd">
    <h1>Cotizaciones</h1>
    <div class="table-wrapper">
      <table class="table">
        <thead>
          <tr>
            <th style="width: 20px;">Cotización</th>
            <th style="width: 40px">Fecha</th>
            <th style="width: 20px">No.Pagos</th>
            <th style="width: 100px">Referencia</th>
            <th style="width: 150px">Cliente</th>
            <th style="width: 100px">Descripción</th>
            <th style="width: 40px">Fondeador</th>
            <th style="width: 50px">ValorOperación</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td class="text-center">500</td>
          <td class="text-center">12-Sept-15</td>
          <td class="text-center">30</td>
          <td class="text-center">123413241234</td>
          <td>MERCADEO SSBC SA DE SV Y SU SEÑOR DE LOS CIELOS SBSC ATENDIENDO</td>
          <td>PRESTAMO AUTO</td>
          <td class="text-center">RP</td>
          <td class="text-right">$431,000</td>
        </tr>
        <tr v-for="i in 100" :key="i">
          <td class="text-center">500</td>
          <td class="text-center">12-Sept-15</td>
          <td class="text-center">30</td>
          <td class="text-center">123413241234</td>
          <td>MERCADEO SSBC SA DE SV</td>
          <td>PRESTAMO AUTO</td>
          <td class="text-center">RP</td>
          <td class="text-right">$431,000</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VDCotizaciones',
  data: () => ({
    fab: false
  }),
};
</script>

<style lang="scss" scoped>
.vd, th {
  color: #145A32
}
td {
  color: #138D75;
}
</style>
