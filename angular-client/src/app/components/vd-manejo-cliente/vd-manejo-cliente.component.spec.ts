import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdManejoClienteComponent } from './vd-manejo-cliente.component';

describe('VdManejoClienteComponent', () => {
  let component: VdManejoClienteComponent;
  let fixture: ComponentFixture<VdManejoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VdManejoClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VdManejoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
