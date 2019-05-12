import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Ficha } from './../model/Ficha';
import { FichaService } from './../ficha.service';

@Component({
  selector: 'app-fichas-list',
  templateUrl: './fichas-list.component.html',
  styleUrls: ['./fichas-list.component.css']
})
export class FichasListComponent implements OnInit {
  fichas: Observable<Ficha[]>;

  constructor(private fichaService: FichaService) {}

  ngOnInit() {
    this.reloadData();
  }

  deleteFichas() {
    this.fichaService.deleteAll().subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log('ERROR: ' + error)
    );
  }

  reloadData() {
    this.fichas = this.fichaService.getFichasList();
  }
}
