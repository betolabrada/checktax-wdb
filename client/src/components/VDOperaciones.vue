<template>
  <div class="vd">
    <h1>Operaciones</h1>
    <table class="just-header table">
      <tbody>
      <tr>
        <th style="width: 20px">Operación</th>
        <th style="width: 40px">Fecha</th>
        <th style="width: 40px">No.Pagos</th>
        <th style="width: 60px">Referencia</th>
        <th style="width: 100px">Cliente</th>
        <th style="width: 100px">Descripción</th>
        <th style="width: 80px">Fondeador</th>
        <th style="width: 80px">ValorOperación</th>
      </tr>
      </tbody>
    </table>
    <div class="table-wrapper">
      <table class="table">
        <tbody>
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
      console.log(dateObj);

      const day = dateObj.getDate();
      const month = months[dateObj.getMonth()];
      const year = dateObj.getFullYear();

      return day + '-' + month + '-' + year;
    }
  },
  created() {
    this.fetchFinanzas();
    console.log(this.finanzas);
  }
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