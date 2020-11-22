import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteAutosComponent } from './lote-autos.component';

describe('LoteAutosComponent', () => {
  let component: LoteAutosComponent;
  let fixture: ComponentFixture<LoteAutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoteAutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoteAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
