import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonButton
} from '@ionic/angular/standalone';

import { ConfiguracionService } from '../servicios/configuracion';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonCheckbox,
    IonButton
  ]
})
export class Tab3Page implements OnInit {

  borrarInicio = false;

  constructor(
    private configService: ConfiguracionService
  ) {}

  async ngOnInit() {
    const config = await this.configService.obtenerConfig();
    this.borrarInicio = config.borrarInicio;
  }

  async guardar() {
    await this.configService.guardarConfig({
      borrarInicio: this.borrarInicio
    });
  }
}