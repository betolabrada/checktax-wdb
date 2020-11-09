import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefBancariasComponent } from './ref-bancarias.component';

describe('RefBancariasComponent', () => {
  let component: RefBancariasComponent;
  let fixture: ComponentFixture<RefBancariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefBancariasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefBancariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
