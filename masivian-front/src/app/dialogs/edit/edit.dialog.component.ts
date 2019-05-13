import { FichaService } from './../../ficha.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Ficha } from 'src/app/model/Ficha';

@Component({
  selector: 'app-baza.dialog',
  templateUrl: '../../dialogs/edit/edit.dialog.html',
  styleUrls: ['../../dialogs/edit/edit.dialog.css']
})
export class EditDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dataService: FichaService
  ) {}

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  areas: any[] = [
    { value: 'Tecnología', viewValue: 'Tecnología' },
    { value: 'Verticales', viewValue: 'Verticales' },
    { value: 'Comercial', viewValue: 'Comercial' },
    { value: 'Gerencia', viewValue: 'Gerencia' }
  ];

  canals: any[] = [
    { value: 'SMS', viewValue: 'SMS' },
    { value: 'Email', viewValue: 'Email' },
    { value: 'Voz', viewValue: 'Voz' }
  ];

  getErrorMessage() {
    return this.formControl.hasError('required')
      ? 'Required field'
      : this.formControl.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  submit() {
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    this.dataService
    .updateFicha(this.data.id, {
      nombre: this.data.nombre,
      cuerpo: this.data.cuerpo,
      area: this.data.area,
      canal: this.data.canal
    })
    .subscribe(
      data => {
        console.log(data);
        this.data = data as Ficha;
      },
      error => console.log(error)
    );
  }

}
