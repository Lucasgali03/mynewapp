import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { PacienteDetail } from './paciente-detail';

@Injectable()
export class PacienteService {
    private apiUrl: string = "https://gist.githubusercontent.com/k-garces/17c74c4ce5f6b09583fd9fcd941a7b68/raw/d9119d1d89f6fe4dea0250754baf11ea9dad1457/pacients.json";
    constructor(private http: HttpClient) { }

    getPacientes(): Observable<PacienteDetail[]> {
        return this.http.get<PacienteDetail[]>(this.apiUrl);
      }
}
