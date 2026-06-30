import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SqliteService {

  private db: any;
  private citas: any[] = [];

  constructor() {}

  async init() {
    // Simulación de base de datos (para taller)
    this.citas = [
      { id: 1, frase: 'La imaginación es más importante', autor: 'Einstein' }
    ];
  }

  async obtenerCitas() {
    return this.citas;
  }

  async agregarCita(cita: any) {
    this.citas.push(cita);
  }

  async eliminarCita(id: number) {
    this.citas = this.citas.filter(c => c.id !== id);
  }

  async limpiar() {
    this.citas = [];
  }
}