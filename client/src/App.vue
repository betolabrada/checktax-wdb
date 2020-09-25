<template>
  <v-app>
    <v-navigation-drawer
        v-model="primaryDrawer.model"
        :clipped="primaryDrawer.clipped"
        :mini-variant="primaryDrawer.mini"
        app
        overflow
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>Daniel Weiss</v-list-item-title>

      </v-list-item>

      <v-divider></v-divider>
      <v-list dense>
        <v-list-item
            v-for="item in primaryDrawer.items"
            :key="item.title"
            link
            @click="ventanaActual = item.comp"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
        :clipped-left="primaryDrawer.clipped"
        app
    >
      <v-app-bar-nav-icon
          @click.stop="primaryDrawer.model = !primaryDrawer.model"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>{{ ventanaActual }}</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-row
            align="center"
            justify="center"
        >
          <v-col cols="10">
            <v-d-operaciones v-if="ventanaActual === 'VDOperaciones'"></v-d-operaciones>
            <v-d-cotizaciones v-if="ventanaActual === 'VDCotizaciones'"></v-d-cotizaciones>
            <v-d-plan-pagos v-if="ventanaActual === 'VDPlanPagos'"></v-d-plan-pagos>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import VDOperaciones from "@/components/VDOperaciones";
import VDCotizaciones from "@/components/VDCotizaciones";
import VDPlanPagos from "@/components/VDPlanPagos";

export default {
  data() {
    return {
      primaryDrawer: {
        model: null,
        clipped: true,
        mini: true,
        color: 'primary',
        items: [
          { comp: 'VDOperaciones', title: 'Operaciones', icon: 'mdi-finance' },
          { comp: 'VDCotizaciones', title: 'Cotizaciones', icon: 'mdi-cash-check' },
          { comp: 'VDPlanPagos', title: 'Plan De Pagos', icon: 'mdi-account-cash' },
          { comp: 'VDOperaciones', title: 'Nuevo Usuario', icon: 'mdi-account-outline' },
          { comp: 'VDOperaciones', title: 'Usuarios', icon: 'mdi-account-group-outline' },
        ],
      },
      ventanaActual: 'VDOperaciones'
    }
  },
  components: {
    VDOperaciones,
    VDCotizaciones,
    VDPlanPagos
  }
}
</script>
