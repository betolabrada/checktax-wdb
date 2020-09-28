<template>
  <v-data-table
      fixed-header
      height="90vh"
      disable-pagination
      disable-sort
      hide-default-footer
      :headers="headers"
      :items="operaciones"
      class="elevation-1"
      dense
  >
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'Operación',
          align: 'center',
          value: 'operacion',
          divider: true
        },
        { text: 'Fecha', value: 'fecha', divider: true },
        { text: 'No. Pagos', value: 'noPagos', divider: true },
        { text: 'Referencia', value: 'referencia', divider: true },
        { text: 'Cliente', value: 'cliente', divider: true },
        { text: 'Descripción', value: 'descripcion', divider: true },
        { text: 'Fondeador', value: 'fondeador', divider: true },
        { text: 'Valor Operación', value: 'valorOperacion', divider: true },
      ],
      operaciones: Array.from({ length: 500 }).map((v, k) => ({
        operacion: `#${k}`,
        fecha: '25-Sep-2020',
        noPagos: 30,
        referencia: 10,
        cliente: 'Cliente',
        descripcion: 'Fondeo',
        fondeador: 'Fondeador',
        valorOperacion: 100
      }))
    }
  },
  methods: {}
}
</script>
