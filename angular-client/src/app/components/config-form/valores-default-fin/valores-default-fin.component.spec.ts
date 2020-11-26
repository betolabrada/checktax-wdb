import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoresDefaultFinComponent } from './valores-default-fin.component';

describe('ValoresDefaultFinComponent', () => {
  let component: ValoresDefaultFinComponent;
  let fixture: ComponentFixture<ValoresDefaultFinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValoresDefaultFinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValoresDefaultFinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
