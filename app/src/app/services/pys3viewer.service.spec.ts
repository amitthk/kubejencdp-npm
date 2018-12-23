/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Pys3viewerService } from './pys3viewer.service';

describe('Pys3viewerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Pys3viewerService]
    });
  });

  it('should ...', inject([Pys3viewerService], (service: Pys3viewerService) => {
    expect(service).toBeTruthy();
  }));
});
