import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosParamComponent } from './otros-param.component';

describe('OtrosParamComponent', () => {
  let component: OtrosParamComponent;
  let fixture: ComponentFixture<OtrosParamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtrosParamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrosParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
