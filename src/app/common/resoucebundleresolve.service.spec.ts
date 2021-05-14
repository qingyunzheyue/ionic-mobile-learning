import { TestBed } from '@angular/core/testing';

import { ResoucebundleresolveService } from './resoucebundleresolve.service';

describe('ResoucebundleresolveService', () => {
  let service: ResoucebundleresolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResoucebundleresolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
