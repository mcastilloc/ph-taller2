import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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

constructor(
  private citaService: CitaService,
  private fb: FormBuilder
) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
  frase: [
    '',
    [
      Validators.required,
      Validators.minLength(5)
    ]
  ],
  autor: [
    '',
    [
      Validators.required,
      Validators.minLength(2)
    ]
  ]
});

this.citas = this.citaService.obtenerCitas();
  }

  eliminar(id: number): void {
    this.citaService.eliminarCita(id);
    this.citas = this.citaService.obtenerCitas();
  }

  guardar(): void {

  if (this.formulario.invalid) {
    this.formulario.markAllAsTouched();
    return;
  }

  this.citaService.agregarCita({
    id: Date.now(),
    frase: this.formulario.value.frase,
    autor: this.formulario.value.autor
  });

  this.citas = this.citaService.obtenerCitas();

  this.formulario.reset();
}
  
  formulario!: FormGroup;
}