import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadOpdScheduleComponent } from './load-opd-schedule.component';

describe('LoadOpdScheduleComponent', () => {
  let component: LoadOpdScheduleComponent;
  let fixture: ComponentFixture<LoadOpdScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadOpdScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadOpdScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
