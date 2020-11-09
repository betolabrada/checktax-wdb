import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseMoratoriosComponent } from './base-moratorios.component';

describe('BaseMoratoriosComponent', () => {
  let component: BaseMoratoriosComponent;
  let fixture: ComponentFixture<BaseMoratoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseMoratoriosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseMoratoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
