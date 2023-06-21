import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealestatemapComponent } from './realestatemap.component';

describe('RealestatemapComponent', () => {
  let component: RealestatemapComponent;
  let fixture: ComponentFixture<RealestatemapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealestatemapComponent]
    });
    fixture = TestBed.createComponent(RealestatemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
