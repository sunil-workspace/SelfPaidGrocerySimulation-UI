import { TestBed, inject } from '@angular/core/testing';

import { GenerateReceiptService } from './generate-receipt.service';

describe('GenerateReceiptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenerateReceiptService]
    });
  });

  it('should be created', inject([GenerateReceiptService], (service: GenerateReceiptService) => {
    expect(service).toBeTruthy();
  }));
});
