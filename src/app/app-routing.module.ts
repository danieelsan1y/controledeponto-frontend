import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/views/home/home.component";
import {PersonCrudComponent} from "./components/views/person-crud/person-crud.component";
import {PersonCreateComponent} from "./components/person/person-create/person-create.component";

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"persons",
    component:PersonCrudComponent
  },
  {
    path:"persons/create",
    component:PersonCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
