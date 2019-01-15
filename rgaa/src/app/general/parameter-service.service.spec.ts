import { TestBed } from '@angular/core/testing';

import { ParameterServiceService } from './parameter-service.service';

describe('ParameterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParameterServiceService = TestBed.get(ParameterServiceService);
    expect(service).toBeTruthy();
  });
});
