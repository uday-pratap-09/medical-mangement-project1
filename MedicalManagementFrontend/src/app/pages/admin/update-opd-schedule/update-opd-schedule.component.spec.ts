import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOpdScheduleComponent } from './update-opd-schedule.component';

describe('UpdateOpdScheduleComponent', () => {
  let component: UpdateOpdScheduleComponent;
  let fixture: ComponentFixture<UpdateOpdScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOpdScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOpdScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
