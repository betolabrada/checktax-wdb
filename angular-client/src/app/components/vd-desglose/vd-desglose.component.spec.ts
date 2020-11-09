import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdDesgloseComponent } from './vd-desglose.component';

describe('VdDesgloseComponent', () => {
  let component: VdDesgloseComponent;
  let fixture: ComponentFixture<VdDesgloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VdDesgloseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VdDesgloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
