import { TestBed } from '@angular/core/testing';

import { ScreenwidthServiceService } from './screenwidth.service.service';

describe('ScreenwidthServiceService', () => {
  let service: ScreenwidthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenwidthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
