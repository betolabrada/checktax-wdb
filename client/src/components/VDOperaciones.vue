<template>
  <div class="vd">
    <h1>Operaciones</h1>
    <div class="table-wrapper">
      <table class="table table-sm">
        <thead>
          <tr>
            <th style="width: 30px;">Operación</th>
            <th style="width: 40px">Fecha</th>
            <th style="width: 30px">No.Pagos</th>
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
        <tr v-for="i in this.finanzas" :key="i._id">
          <td style="width: 20px">{{i.operacion}}</td>
          <td style="width: 40px">{{dateInFormat(i.fecha)}}</td>
          <td style="width: 40px">{{i.noPagos}}</td>
          <td style="width: 60px">{{i.referencia}}</td>
          <td style="width: 100px">{{i.dePara}}</td>
          <td style="width: 100px">{{i.descripcion}}</td>
          <td style="width: 80px">{{i.fondeador}}</td>
          <td style="width: 80px">{{i.valorOperacion}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
export default {
  name: 'VDOperaciones',
  data: () => ({
    fab: false
  }),
  computed: {
    ...mapState(['finanzas']),
  },
  methods: {
    ...mapActions(['fetchFinanzas']),
    dateInFormat(date) {
      const dateObj = new Date(date);

      const day = dateObj.getDate();
      const month = months[dateObj.getMonth()];
      const year = dateObj.getFullYear();

      return day + '-' + month + '-' + year;
    }
  },
  created() {
    this.fetchFinanzas();
  }
};
</script>

<style lang="scss" scoped>

</style>
