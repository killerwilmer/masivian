import { Ficha } from './../model/Ficha';
import { FichaService } from './../ficha.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-ficha',
  templateUrl: './create-ficha.component.html',
  styleUrls: ['./create-ficha.component.css']
})
export class CreateFichaComponent implements OnInit {
  ficha: Ficha = new Ficha();
  submitted = false;

  constructor(private fichaService: FichaService) {}

  ngOnInit() {}

  newCustomer(): void {
    this.submitted = false;
    this.ficha = new Ficha();
  }

  save() {
    this.fichaService
      .createFicha(this.ficha)
      .subscribe(data => console.log(data), error => console.log(error));
    this.ficha = new Ficha();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
