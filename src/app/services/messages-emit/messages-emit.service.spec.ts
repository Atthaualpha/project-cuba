import { TestBed, inject } from '@angular/core/testing';

import { MessagesEmitService } from './messages-emit.service';

describe('MessagesEmitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessagesEmitService]
    });
  });

  it('should be created', inject([MessagesEmitService], (service: MessagesEmitService) => {
    expect(service).toBeTruthy();
  }));
});
