import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdAltaClienteComponent } from './vd-alta-cliente.component';

describe('VdAltaClienteComponent', () => {
  let component: VdAltaClienteComponent;
  let fixture: ComponentFixture<VdAltaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VdAltaClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VdAltaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
