import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFormNavComponent } from './main-form-nav.component';

describe('MainFormNavComponent', () => {
  let component: MainFormNavComponent;
  let fixture: ComponentFixture<MainFormNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainFormNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFormNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
