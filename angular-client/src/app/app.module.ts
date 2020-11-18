import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFormComponent } from './components/main-form/main-form.component';
import { MainFormNavComponent } from './components/nav/main-form-nav/main-form-nav.component';
import { GeneralComponent } from './components/main-form/general/general.component';
import { ExtensionFormComponent } from './components/extension-form/extension-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VdNavComponent } from './components/nav/vd-nav/vd-nav.component';
import { VdOperacionesComponent } from './components/vd-operaciones/vd-operaciones.component';
import { VdCotizacionesComponent } from './components/vd-cotizaciones/vd-cotizaciones.component';
import { VdDesgloseComponent } from './components/vd-desglose/vd-desglose.component';
import { VdAltaClienteComponent } from './components/vd-alta-cliente/vd-alta-cliente.component';
import { VdManejoClienteComponent } from './components/vd-manejo-cliente/vd-manejo-cliente.component';
import { VdOperacionesSinPlanComponent } from './components/vd-operaciones-sin-plan/vd-operaciones-sin-plan.component';
import { ConfigPage } from './pages/config/config.page';
import { HomePage } from './pages/home/home.page';
import { ConfigFormComponent } from './components/config-form/config-form.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { FondeadoresComponent } from './components/config-form/fondeadores/fondeadores.component';
import { AplicarPagosComponent } from './components/config-form/aplicar-pagos/aplicar-pagos.component';
import { BaseMoratoriosComponent } from './components/config-form/base-moratorios/base-moratorios.component';
import { RefBancariasComponent } from './components/config-form/ref-bancarias/ref-bancarias.component';
import { EstatusCarteraComponent } from './components/config-form/estatus-cartera/estatus-cartera.component';
import { ValoresDefaultFinComponent } from './components/config-form/valores-default-fin/valores-default-fin.component';
import { LiquidacionesComponent } from './components/config-form/liquidaciones/liquidaciones.component';
import { SegurosAutosComponent } from './components/config-form/seguros-autos/seguros-autos.component';
import { CalifBuroComponent } from './components/config-form/calif-buro/calif-buro.component';
import { ConfigLoteAutosComponent } from './components/config-form/config-lote-autos/config-lote-autos.component';

import { CommonModule } from '@angular/common';
import { AlertModule } from './components/alert';
import { ClickOutsideModule } from 'ng-click-outside';
import { SavingIconComponent } from './components/nav/main-form-nav/saving-icon/saving-icon.component';
import { FinanciamientoComponent } from './components/main-form/financiamiento/financiamiento.component';
import { FormsModule } from '@angular/forms';
import { OtrosParamComponent } from './components/main-form/otros-param/otros-param.component';
@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    MainFormNavComponent,
    GeneralComponent,
    ExtensionFormComponent,
    VdNavComponent,
    VdOperacionesComponent,
    VdCotizacionesComponent,
    VdDesgloseComponent,
    VdAltaClienteComponent,
    VdManejoClienteComponent,
    VdOperacionesSinPlanComponent,
    ConfigPage,
    HomePage,
    ConfigFormComponent,
    ManageUsersComponent,
    FondeadoresComponent,
    AplicarPagosComponent,
    BaseMoratoriosComponent,
    RefBancariasComponent,
    EstatusCarteraComponent,
    ValoresDefaultFinComponent,
    LiquidacionesComponent,
    SegurosAutosComponent,
    CalifBuroComponent,
    ConfigLoteAutosComponent,
    SavingIconComponent,
    FinanciamientoComponent,
    OtrosParamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    HttpClientModule,
    AlertModule,
    ClickOutsideModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
