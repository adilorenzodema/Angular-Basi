import { TestBed } from '@angular/core/testing';

import { DipendentiServiceService } from './dipendenti-service.service';

describe('DipendentiServiceService', () => {
  let service: DipendentiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DipendentiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
