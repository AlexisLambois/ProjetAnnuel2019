import { TestBed } from '@angular/core/testing';

import { FormatageService } from './formatage.service';

describe('FormatageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormatageService = TestBed.get(FormatageService);
    expect(service).toBeTruthy();
  });
});
