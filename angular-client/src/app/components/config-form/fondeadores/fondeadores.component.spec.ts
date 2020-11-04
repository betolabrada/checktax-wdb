import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondeadoresComponent } from './fondeadores.component';

describe('FondeadoresComponent', () => {
  let component: FondeadoresComponent;
  let fixture: ComponentFixture<FondeadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FondeadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FondeadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
