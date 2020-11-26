import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdOperacionesComponent } from './vd-operaciones.component';

describe('VdOperacionesComponent', () => {
  let component: VdOperacionesComponent;
  let fixture: ComponentFixture<VdOperacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VdOperacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VdOperacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
