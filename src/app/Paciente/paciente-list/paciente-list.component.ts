import { Component, OnInit } from '@angular/core';
import { PacienteService } from "../paciente.service";
import { PacienteDetail } from '../paciente-detail';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {

  selectedPaciente!: PacienteDetail
  selected: Boolean = false;
  pacientes: Array<PacienteDetail> = [];

  constructor(private pacienteService: PacienteService) { }

  onSelected(paciente: PacienteDetail): void {
    this.selected = true;
    this.selectedPaciente = paciente;
  }

  getPacientes(): void {
    this.pacienteService.getPacientes().subscribe({next: apiData => this.pacientes = apiData , error: e => console.error(e)});
    this.pacientes.forEach((paciente)=>{console.log(paciente)});
  }

  ngOnInit() {
    this.getPacientes();
  }

}
