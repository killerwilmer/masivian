import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateFichaComponent } from './create-ficha/create-ficha.component';
import { FichaDetailsComponent } from './ficha-details/ficha-details.component';
import { FichasListComponent } from './fichas-list/fichas-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateFichaComponent,
    FichaDetailsComponent,
    FichasListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
