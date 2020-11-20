import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicarOpComponent } from './aplicar-op.component';

describe('AplicarOpComponent', () => {
  let component: AplicarOpComponent;
  let fixture: ComponentFixture<AplicarOpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplicarOpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicarOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
