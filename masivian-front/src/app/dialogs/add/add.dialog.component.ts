import { Ficha } from './../../model/Ficha';
import { FichaService } from './../../ficha.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add.dialog',
  templateUrl: '../../dialogs/add/add.dialog.html',
  styleUrls: ['../../dialogs/add/add.dialog.css']
})
export class AddDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ficha,
    public fichaService: FichaService
  ) {}

  areas: any[] = [
    {value: 'Tecnología', viewValue: 'Tecnología'},
    {value: 'Verticales', viewValue: 'Verticales'},
    {value: 'Comercial', viewValue: 'Comercial'},
    {value: 'Gerencia', viewValue: 'Gerencia'}
  ];

  canals: any[] = [
    {value: 'SMS', viewValue: 'SMS'},
    {value: 'Email', viewValue: 'Email'},
    {value: 'Voz', viewValue: 'Voz'}
  ];

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

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


  confirmAdd() {
    this.fichaService
      .createFicha(this.data)
      .subscribe(data => console.log(data), error => console.log(error));
    this.data = new Ficha();
  }

}
