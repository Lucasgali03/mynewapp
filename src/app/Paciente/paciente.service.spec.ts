/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PacienteService } from './paciente.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Paciente', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PacienteService]
    });
  });

  it('should ...', inject([PacienteService], (service: PacienteService) => {
    expect(service).toBeTruthy();
  }));
});
