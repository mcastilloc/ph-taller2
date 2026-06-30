import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqliteService } from '../servicios/sqlite';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonButton
} from '@ionic/angular/standalone';

import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { Cita } from '../modelos/citas';
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
    IonInput,
    IonItem,
    IonLabel,
    IonButton,
    CitaCardComponent,
    ReactiveFormsModule
  ]
})

export class Tab2Page implements OnInit {

  citas: Cita[] = [];
  formulario!: FormGroup;
  private ready: boolean = false; 

  constructor(
    private sqlite: SqliteService,
    private fb: FormBuilder
  ) {}

  async ngOnInit() {

    await this.sqlite.init();
    this.ready = true;

    this.formulario = this.fb.group({
      frase: ['', [Validators.required, Validators.minLength(5)]],
      autor: ['', [Validators.required, Validators.minLength(2)]]
    });

    this.citas = await this.sqlite.getCitas();
  }

  async eliminar(id: number) {
    await this.sqlite.deleteCita(id);
    this.citas = await this.sqlite.getCitas();
  }

  async guardar() {

    if (!this.ready) {
      console.log('DB no lista aún');
      return;
    }

    if (this.formulario.invalid) return;

    await this.sqlite.addCita(this.formulario.value);

    this.citas = await this.sqlite.getCitas();
    this.formulario.reset();
    console.log('FORM VALUE', this.formulario.value);
    await this.sqlite.addCita(this.formulario.value);
    console.log('INSERT DONE');
  }
}