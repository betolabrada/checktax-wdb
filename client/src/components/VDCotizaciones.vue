<template>
  <v-data-table
      fixed-header
      height="90vh"
      disable-pagination
      disable-sort
      hide-default-footer
      :headers="headers"
      :items="cotizaciones"
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
          text: 'Cotización',
          align: 'center',
          value: 'cotizacion',
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
      cotizaciones: Array.from({ length: 500 }).map((v, k) => ({
        cotizacion: `#${k}`,
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
