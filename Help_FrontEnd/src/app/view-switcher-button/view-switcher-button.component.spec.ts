import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSwitcherButtonComponent } from './view-switcher-button.component';

describe('ViewSwitcherButtonComponent', () => {
  let component: ViewSwitcherButtonComponent;
  let fixture: ComponentFixture<ViewSwitcherButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSwitcherButtonComponent]
    });
    fixture = TestBed.createComponent(ViewSwitcherButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
