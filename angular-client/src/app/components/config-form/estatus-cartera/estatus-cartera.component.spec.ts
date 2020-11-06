import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatusCarteraComponent } from './estatus-cartera.component';

describe('EstatusCarteraComponent', () => {
  let component: EstatusCarteraComponent;
  let fixture: ComponentFixture<EstatusCarteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstatusCarteraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatusCarteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
