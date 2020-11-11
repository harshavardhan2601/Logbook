import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftViewComponent } from './aircraft-view.component';

describe('AircraftViewComponent', () => {
  let component: AircraftViewComponent;
  let fixture: ComponentFixture<AircraftViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AircraftViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AircraftViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
