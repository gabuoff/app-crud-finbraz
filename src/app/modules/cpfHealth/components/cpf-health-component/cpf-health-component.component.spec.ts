import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpfHealthComponentComponent } from './cpf-health-component.component';

describe('CpfHealthComponentComponent', () => {
  let component: CpfHealthComponentComponent;
  let fixture: ComponentFixture<CpfHealthComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CpfHealthComponentComponent]
    });
    fixture = TestBed.createComponent(CpfHealthComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
