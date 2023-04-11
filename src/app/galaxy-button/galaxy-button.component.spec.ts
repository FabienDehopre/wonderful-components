import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxyButtonComponent } from './galaxy-button.component';

describe('GalaxyButtonComponent', () => {
  let component: GalaxyButtonComponent;
  let fixture: ComponentFixture<GalaxyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ GalaxyButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalaxyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
