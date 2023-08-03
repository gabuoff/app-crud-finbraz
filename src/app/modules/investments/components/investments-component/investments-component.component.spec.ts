import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsComponentComponent } from './investments-component.component';

describe('InvestmentsComponentComponent', () => {
  let component: InvestmentsComponentComponent;
  let fixture: ComponentFixture<InvestmentsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestmentsComponentComponent]
    });
    fixture = TestBed.createComponent(InvestmentsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
