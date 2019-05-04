import { TestBed } from '@angular/core/testing';

import { GetDbDataService } from './get-db-data.service';

describe('GetDbDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetDbDataService = TestBed.get(GetDbDataService);
    expect(service).toBeTruthy();
  });
});
