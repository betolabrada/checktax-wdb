import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigLoteAutosComponent } from './config-lote-autos.component';

describe('ConfigLoteAutosComponent', () => {
  let component: ConfigLoteAutosComponent;
  let fixture: ComponentFixture<ConfigLoteAutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigLoteAutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigLoteAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
