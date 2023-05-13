import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NightDayToggleComponent } from './night-day-toggle.component';

describe('NightDayToggleComponent', () => {
  let component: NightDayToggleComponent;
  let fixture: ComponentFixture<NightDayToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NightDayToggleComponent]
    });
    fixture = TestBed.createComponent(NightDayToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
