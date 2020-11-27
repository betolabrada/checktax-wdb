import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {
  loading = false;
  error = '';
  manageForm: FormGroup;

  constructor(private fb: FormBuilder,
              private userService: UserService) { }

  ngOnInit(): void {
    this.manageForm = this.fb.group({
      username: ['', Validators.required],
      permissions: this.fb.group({
        financiamiento: this.fb.group({
          altaOperaciones: [false],
          guardarCambios: [false],
          datosGenerales: [false],
          financiamiento: [false],
          seguros: [false],
          lotesAutos: [false],
          referenciasBancos: [false],
          garantia: [false],
          credito: [false],
          cobranza: [false],
          otros: [false],
          generarPlanPagos: [false],
          cambiarNombres: [false],
          cambiarReferencias: [false],
        }),
        pagosIndividuales: this.fb.group({
          ventanaLiquidaciones: [false],
          ventanaPagos: [false],
          aplicarAdjudicacion: [false],
          ventanaAdjudicaciones: [false],
          aplicarLiquidaciones: [false],
          aplicarPagos: [false],
        }),
        chequera: this.fb.group({
          altaMovimientos: [false],
          sincronizar: [false],
          guardarArchivoTemporal: [false],
          guardarCambios: [false],
          bajaMovimientos: [false],
          cambiosMovimientos: [false],
        }),
        cobranza: this.fb.group({
          aplicarPagosCobranza: [false],
        }),
        configuracion: this.fb.group({
          fondeadores: [false],
          calificacionBuro: [false],
          estatusCarteraAct: [false],
          permisosOperacion: [false],
          adjudicaciones: [false],
          referenciasBancarias: [false],
          lotesAutos: [false],
          segurosAutos: [false],
          prePago: [false],
          baseMoratorios: [false],
          valoresDefault: [false],
          aplicacionPagos: [false],
        }),
        inventarioAdjudicacion: this.fb.group({
          desplegar: [false],
          guardarCambios: [false],
        })
      }),
    });
  }

  get f() {
    return this.manageForm.controls;
  }

  onSubmit(type: string): void {
    console.log('submitting...');
    // stop here if form is invalid
    if (this.manageForm.invalid) {
      return;
    }

    if (type === 'buscar') {
      this.userService.getPermissions(this.f.username.value)
        .pipe(first())
        .subscribe({
          next: () => {
            // get return url from route parameters or default to '/'
            this.loading = false;
          },
          error: error => {
            console.log(error);
            this.error = error.error?.msg;
          }
        });
    } else if (type === 'aplicar') {
      console.log(this.f.permissions.value);
      this.userService.setPermissions(this.f.username.value, this.f.permissions.value)
        .pipe(first())
        .subscribe({
          next: () => {
            // get return url from route parameters or default to '/'
            this.loading = false;
          },
          error: error => {
            console.log(error);
            this.error = error.error?.msg;
          }
        });
    }

  }

  setAllInGroup(group: FormGroup, b: boolean) {
    const payload = {};
    for (const key of Object.keys(group.value)) {
      payload[key] = b;
    }
    group.setValue(payload);
  }

  onCheckedAll(groupPath: string, $event: Event) {
    console.log(($event.target as HTMLInputElement).checked);
    const group = this.manageForm.get(groupPath) as FormGroup;
    if (($event.target as HTMLInputElement).checked) {
      this.setAllInGroup(group, true);
    } else {
      this.setAllInGroup(group, false);
    }
  }
}
