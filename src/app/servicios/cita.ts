import { Injectable } from '@angular/core';
import { Cita } from '../modelos/citas';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private citas: Cita[] = [
    {
      id: 1,
      frase: 'La imaginación es más importante que el conocimiento.',
      autor: 'Albert Einstein'
    },
    {
      id: 2,
      frase: 'Solo sé que no sé nada.',
      autor: 'Sócrates'
    },
    {
      id: 3,
      frase: 'Pienso, luego existo.',
      autor: 'René Descartes'
    }
  ];

  constructor() {}

  obtenerCitas(): Cita[] {
    return this.citas;
  }

  obtenerCitaAleatoria(): Cita {
    const indice = Math.floor(Math.random() * this.citas.length);
    return this.citas[indice];
  }

  agregarCita(cita: Cita): void {
    this.citas.push(cita);
  }

  eliminarCita(id: number): void {
    this.citas = this.citas.filter(c => c.id !== id);
  }
}