import { Paciente } from "./paciente";

export class PacienteDetail extends Paciente
{
    diagnostico: string;
    constructor(
        id: number,
        nombre: string,
        edad: number,
        diagnostico: string,
      ) {
        super(id, nombre, edad);
        this.diagnostico = diagnostico;
      }
}
