import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicarPagosComponent } from './aplicar-pagos.component';

describe('AplicarPagosComponent', () => {
  let component: AplicarPagosComponent;
  let fixture: ComponentFixture<AplicarPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplicarPagosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicarPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
