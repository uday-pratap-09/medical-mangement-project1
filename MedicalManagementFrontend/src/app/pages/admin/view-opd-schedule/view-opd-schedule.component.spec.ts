import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOPDScheduleComponent } from './view-opd-schedule.component';

describe('ViewOPDScheduleComponent', () => {
  let component: ViewOPDScheduleComponent;
  let fixture: ComponentFixture<ViewOPDScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOPDScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOPDScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
