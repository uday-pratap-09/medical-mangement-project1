import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOpdScheduleComponent } from './add-opd-schedule.component';

describe('AddOpdScheduleComponent', () => {
  let component: AddOpdScheduleComponent;
  let fixture: ComponentFixture<AddOpdScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOpdScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOpdScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
