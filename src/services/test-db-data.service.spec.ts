import {TestBed} from '@angular/core/testing';

import {TestDbDataService} from './test-db-data.service';

describe('TestDbDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestDbDataService = TestBed.get(TestDbDataService);
    expect(service).toBeTruthy();
  });
});
