import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingIconComponent } from './saving-icon.component';

describe('SavingIconComponent', () => {
  let component: SavingIconComponent;
  let fixture: ComponentFixture<SavingIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
