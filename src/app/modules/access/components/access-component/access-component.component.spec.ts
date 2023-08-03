import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessComponentComponent } from './access-component.component';

describe('AccessComponentComponent', () => {
  let component: AccessComponentComponent;
  let fixture: ComponentFixture<AccessComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessComponentComponent]
    });
    fixture = TestBed.createComponent(AccessComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
