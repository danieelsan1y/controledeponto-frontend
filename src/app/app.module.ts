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
import {PersonService} from "./components/person/person-service/person.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import { PersonListComponent } from './components/person/person-list/person-list.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ListDialogComponent } from './components/views/list-dialog/list-dialog.component';
import { PersonUpdateComponent } from './components/person/person-update/person-update.component';
import { RecordInsertComponent } from './components/record/record-insert/record-insert.component';
import {RecordService} from "./components/record/record-service/record.service";

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
    ListDialogComponent,
    PersonUpdateComponent,
    RecordInsertComponent,
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
    MatDialogModule
  ],
  providers: [PersonService, MatSnackBar, RecordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
