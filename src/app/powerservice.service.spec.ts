import { TestBed } from '@angular/core/testing';

import { PowerserviceService } from './powerservice.service';

describe('PowerserviceService', () => {
  let service: PowerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PowerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
