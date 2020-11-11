import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechlogbookComponent } from './techlogbook.component';

describe('TechlogbookComponent', () => {
  let component: TechlogbookComponent;
  let fixture: ComponentFixture<TechlogbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechlogbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechlogbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
