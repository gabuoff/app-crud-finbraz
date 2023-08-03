import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffsidebarComponent } from './offsidebar.component';

describe('OffsidebarComponent', () => {
  let component: OffsidebarComponent;
  let fixture: ComponentFixture<OffsidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffsidebarComponent]
    });
    fixture = TestBed.createComponent(OffsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
