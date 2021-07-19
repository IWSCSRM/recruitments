import { TestBed } from '@angular/core/testing';

import { ApplicantServiceService } from './applicant-service.service';

describe('ApplicantServiceService', () => {
  let service: ApplicantServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicantServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
