import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './nav/nav.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import { HomeComponent } from './components/views/home/home.component';
import { PersonCrudComponent } from './components/views/person-crud/person-crud.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { PersonCreateComponent } from './components/person/person-create/person-create.component';
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {PersonService} from "./components/person/person.service/person.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import { PersonListComponent } from './components/person/person-list/person-list.component';
import { DialogAnimationsExampleComponent } from './components/views/dialog-animations-example/dialog-animations-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    PersonCrudComponent,
    PersonCreateComponent,
    PersonListComponent,
    DialogAnimationsExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonToggleModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
  ],
  providers: [PersonService, MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
