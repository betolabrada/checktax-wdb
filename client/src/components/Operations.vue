<template>
    <v-container>
        <div class="d-block pa-2 black white--text" width="500px">
            Alta-Baja-Edición Operaciones
        </div>
        <div>
            <v-label width="300px" class="mx-auto">Operación</v-label>
            <v-label>     ------------        .--------------               </v-label>
            <v-label width="300px" class="mx-auto">Fecha</v-label>
            <v-label>     ------------        .----------------------               </v-label>
            <v-label width="300px" class="mx-auto">Folio Com.</v-label>
            <v-label>    ---------------         .------------------               </v-label>
            <v-label width="300px" class="mx-auto">Referencia Pagos</v-label>
            <v-label>             .               </v-label>
        </div>
        <div>
            <v-row>
                <v-cols cols="12" sm="6">
                    <v-text-field single-line solo></v-text-field>
                </v-cols>
                <v-cols cols="12" sm="6">
                    <v-text-field single-line solo></v-text-field>
                </v-cols>
                <v-cols cols="12" sm="6">
                    <v-text-field single-line solo></v-text-field>
                </v-cols>
                <v-cols cols="12" sm="6">
                    <v-text-field single-line solo></v-text-field>
                </v-cols>
            </v-row>
        </div>
        <div>
            <v-label>Cliente</v-label>
        </div>
        <div>
            <v-text-field single-line solo></v-text-field>
        </div>
        <div>
            <v-label>Persona</v-label>

            <v-label>Descripción</v-label>
        </div>
        <div>
            <v-row>
                <v-cols cols="12" sm="6">
                    <v-text-field single-line solo></v-text-field>
                </v-cols>
                <v-cols cols="24" sm="20">
                    <v-text-field single-line solo></v-text-field>
                </v-cols>
            </v-row>
        </div>
        <div>
            <v-label>Asesor</v-label>
        </div>
        <div>
            <v-text-field single-line solo></v-text-field>
        </div>
        <div class="d-block pa-2 black white--text" width="500px">
            Otros Parametros-----------------------------                 -------------Financiamiento---------------------                -----------------------Cancelado
        </div>
        <div class="d-inline pa-2 black white--text">Impuestos</div>
        <v-label></v-label>
    </v-container>
</template>