import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftlistComponent } from './aircraftlist.component';

describe('AircraftlistComponent', () => {
  let component: AircraftlistComponent;
  let fixture: ComponentFixture<AircraftlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AircraftlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AircraftlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
