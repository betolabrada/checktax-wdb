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
        { text: 'Fecha', value: 'fecha', divider: true },
        { text: 'Capital', value: 'noPagos', divider: true },
        { text: 'Intereses', value: 'referencia', divider: true },
        { text: 'Administración', value: 'cliente', divider: true },
        { text: 'Intereses', value: 'descripcion', divider: true },
        { text: 'GPS', value: 'fondeador', divider: true },
        { text: 'Intereses', value: 'valorOperacion', divider: true },
        { text: 'SeguroAuto', value: 'valorOperacion', divider: true },
        { text: 'Intereses', value: 'valorOperacion', divider: true },
        { text: 'SeguroDeuda', value: 'valorOperacion', divider: true },
        { text: 'Intereses', value: 'valorOperacion', divider: true },
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

<style>
</style>
