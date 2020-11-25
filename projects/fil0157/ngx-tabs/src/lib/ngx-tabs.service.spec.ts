import { TestBed } from '@angular/core/testing';

import { NgxTabsService } from './ngx-tabs.service';

describe('NgxTabsService', () => {
  let service: NgxTabsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTabsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
