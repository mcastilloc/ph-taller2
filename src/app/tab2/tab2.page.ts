import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from '@ionic/angular/standalone';

import { Cita } from '../modelos/citas';
import { CitaService } from '../servicios/cita';
import { CitaCardComponent } from '../componentes/cita-card/cita-card.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    CitaCardComponent
  ]
})
export class Tab2Page implements OnInit {

  citas: Cita[] = [];

  constructor(
    private citaService: CitaService
  ) {}

  ngOnInit(): void {
    this.citas = this.citaService.obtenerCitas();
  }

  eliminar(id: number): void {
    this.citaService.eliminarCita(id);
    this.citas = this.citaService.obtenerCitas();
  }
}