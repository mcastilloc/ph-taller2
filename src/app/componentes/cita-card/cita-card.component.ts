import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton
} from '@ionic/angular/standalone';

import { Cita } from '../../modelos/citas';

@Component({
  selector: 'app-cita-card',
  templateUrl: './cita-card.component.html',
  styleUrls: ['./cita-card.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton
  ]
})
export class CitaCardComponent {

  @Input()
  cita!: Cita;

  @Input()
  permitirEliminar = false;

  @Output()
  eliminar = new EventEmitter<number>();

  eliminarCita() {
    if (this.cita.id) {
      this.eliminar.emit(this.cita.id);
    }
  }
}