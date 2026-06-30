import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';

import { Cita } from '../modelos/citas';
import { CitaService } from '../servicios/cita';
import { CitaCardComponent } from '../componentes/cita-card/cita-card.component';
import { ConfiguracionService } from '../servicios/configuracion';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    CitaCardComponent
  ],
})
export class Tab1Page implements OnInit {

  #citas: Cita[] = [];
  cita!: Cita;

  constructor(
      private citaService: CitaService,
      private configService: ConfiguracionService
  ) {}

async ngOnInit(): Promise<void> {

  const config = await this.configService.obtenerConfig();

  // obtener cita aleatoria
  this.cita = this.citaService.obtenerCitaAleatoria();

  // si está activado borrar inicio
  if (config.borrarInicio) {
    this.citaService.limpiarCitas();
    this.cita = undefined as any;
  }
}

}