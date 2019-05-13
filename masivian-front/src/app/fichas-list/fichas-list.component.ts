import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';

import { Ficha } from './../model/Ficha';
import { FichaService } from './../ficha.service';
import { AddDialogComponent } from '../dialogs/add/add.dialog.component';
import { DeleteDialogComponent } from '../dialogs/delete/delete.dialog.component';
import { EditDialogComponent } from '../dialogs/edit/edit.dialog.component';


@Component({
  selector: 'app-fichas-list',
  templateUrl: './fichas-list.component.html',
  styleUrls: ['./fichas-list.component.css']
})
export class FichasListComponent implements OnInit {
  fichas: Ficha[];
  displayedColumns: string[] = ['nombre', 'area', 'canal', 'cuerpo', 'actions'];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;

  constructor(private fichaService: FichaService, public dialog: MatDialog) {}

  ngOnInit() {
    this.reloadData();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
    this.fichaService.getFichasList().subscribe((fichas: Ficha[]) => {
      this.dataSource.data = fichas;
      this.fichas = fichas;
    });
  }

  addNew(ficha: Ficha) {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      data: {ficha}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.fichaService.createFicha(ficha);
        this.reloadData();
      }
    });
  }

  deleteItem(i: number, id: string, nombre: string, cuerpo: string, area: string, canal: string) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {id, nombre, cuerpo, area, canal}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.reloadData();
      }
    });
  }

  startEdit(i: number, id: string, nombre: string, cuerpo: string, area: string, canal: string) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: {id, nombre, cuerpo, area, canal}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.reloadData();
      }
    });
  }

}
