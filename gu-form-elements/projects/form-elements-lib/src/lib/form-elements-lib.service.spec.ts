import { TestBed } from '@angular/core/testing';

import { FormElementsLibService } from './form-elements-lib.service';

describe('FormElementsLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormElementsLibService = TestBed.get(FormElementsLibService);
    expect(service).toBeTruthy();
  });
});
