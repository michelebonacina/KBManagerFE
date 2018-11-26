import { TestBed } from '@angular/core/testing';

import { MagazineApiService } from './magazine-api.service';

describe('MagazineApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MagazineApiService = TestBed.get(MagazineApiService);
    expect(service).toBeTruthy();
  });
});
