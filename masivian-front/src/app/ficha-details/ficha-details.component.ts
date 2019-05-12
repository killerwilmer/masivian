import { Component, OnInit, Input } from '@angular/core';

import { Ficha } from './../model/Ficha';
import { FichaService } from '../ficha.service';
import { FichasListComponent } from '../fichas-list/fichas-list.component';

@Component({
  selector: 'app-ficha-details',
  templateUrl: './ficha-details.component.html',
  styleUrls: ['./ficha-details.component.css']
})
export class FichaDetailsComponent implements OnInit {
  @Input() ficha: Ficha;

  constructor(
    private fichaService: FichaService,
    private listComponent: FichasListComponent
  ) {}

  ngOnInit() {}

  deleteFicha() {
    this.fichaService.deleteFicha(this.ficha.id).subscribe(
      data => {
        console.log(data);
        this.listComponent.reloadData();
      },
      error => console.log(error)
    );
  }
}
