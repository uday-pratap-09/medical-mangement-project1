import { TestBed } from '@angular/core/testing';

import { LoadopdscheduleService } from './loadopdschedule.service';

describe('LoadopdscheduleService', () => {
  let service: LoadopdscheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadopdscheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
