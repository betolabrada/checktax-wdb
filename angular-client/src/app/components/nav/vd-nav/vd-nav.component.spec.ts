import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdNavComponent } from './vd-nav.component';

describe('VdNavComponent', () => {
  let component: VdNavComponent;
  let fixture: ComponentFixture<VdNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VdNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VdNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
