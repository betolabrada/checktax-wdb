import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdCotizacionesComponent } from './vd-cotizaciones.component';

describe('VdCotizacionesComponent', () => {
  let component: VdCotizacionesComponent;
  let fixture: ComponentFixture<VdCotizacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VdCotizacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VdCotizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
