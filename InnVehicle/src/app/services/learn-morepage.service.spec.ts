import { TestBed } from '@angular/core/testing';

import { LearnMorepageService } from './learn-morepage.service';

describe('LearnMorepageService', () => {
  let service: LearnMorepageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearnMorepageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
