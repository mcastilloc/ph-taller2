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
import { SqliteService } from '../servicios/sqlite';

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

  cita!: Cita | null;

  constructor(private sqlite: SqliteService) {}

  async ngOnInit() {
    await this.sqlite.init();
    this.cita = await this.sqlite.getRandomCita();
  }

}