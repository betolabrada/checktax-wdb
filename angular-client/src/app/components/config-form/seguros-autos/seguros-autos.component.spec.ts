import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegurosAutosComponent } from './seguros-autos.component';

describe('SegurosAutosComponent', () => {
  let component: SegurosAutosComponent;
  let fixture: ComponentFixture<SegurosAutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegurosAutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegurosAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
