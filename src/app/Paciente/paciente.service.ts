import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { PacienteDetail } from './paciente-detail';

@Injectable()
export class PacienteService {
    private apiUrl: string = environment.baseUrl + 'pacientes';
    constructor(private http: HttpClient) { }

    getPacientes(): Observable<PacienteDetail[]> {
        return this.http.get<PacienteDetail[]>(this.apiUrl);
      }
}
