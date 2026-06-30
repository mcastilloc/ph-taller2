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
    IonCardContent
  ],
})
export class Tab1Page implements OnInit {

  cita!: Cita;

  constructor(
    private citaService: CitaService
  ) {}

  ngOnInit(): void {
    this.cita = this.citaService.obtenerCitaAleatoria();
  }
}