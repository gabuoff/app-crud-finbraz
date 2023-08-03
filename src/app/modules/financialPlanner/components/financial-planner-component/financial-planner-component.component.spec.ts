import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialPlannerComponentComponent } from './financial-planner-component.component';

describe('FinancialPlannerComponentComponent', () => {
  let component: FinancialPlannerComponentComponent;
  let fixture: ComponentFixture<FinancialPlannerComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinancialPlannerComponentComponent]
    });
    fixture = TestBed.createComponent(FinancialPlannerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
