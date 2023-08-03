import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesComponentComponent } from './expenses-component.component';

describe('ExpensesComponentComponent', () => {
  let component: ExpensesComponentComponent;
  let fixture: ComponentFixture<ExpensesComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpensesComponentComponent]
    });
    fixture = TestBed.createComponent(ExpensesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
