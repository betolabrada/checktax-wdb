import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdOperacionesSinPlanComponent } from './vd-operaciones-sin-plan.component';

describe('VdOperacionesSinPlanComponent', () => {
  let component: VdOperacionesSinPlanComponent;
  let fixture: ComponentFixture<VdOperacionesSinPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VdOperacionesSinPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VdOperacionesSinPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
