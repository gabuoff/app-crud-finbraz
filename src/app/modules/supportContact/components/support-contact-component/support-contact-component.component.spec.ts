import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportContactComponentComponent } from './support-contact-component.component';

describe('SupportContactComponentComponent', () => {
  let component: SupportContactComponentComponent;
  let fixture: ComponentFixture<SupportContactComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupportContactComponentComponent]
    });
    fixture = TestBed.createComponent(SupportContactComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
