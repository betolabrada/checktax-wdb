import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalifBuroComponent } from './calif-buro.component';

describe('CalifBuroComponent', () => {
  let component: CalifBuroComponent;
  let fixture: ComponentFixture<CalifBuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalifBuroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalifBuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
