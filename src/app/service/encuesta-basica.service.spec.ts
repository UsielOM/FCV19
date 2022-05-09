import { TestBed } from '@angular/core/testing';

import { EncuestaBasicaService } from './encuesta-basica.service';

describe('EncuestaBasicaService', () => {
  let service: EncuestaBasicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncuestaBasicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
