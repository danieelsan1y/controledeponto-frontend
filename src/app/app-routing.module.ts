import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/views/home/home.component";
import {PersonCrudComponent} from "./components/views/person-crud/person-crud.component";
import {PersonCreateComponent} from "./components/person/person-create/person-create.component";
import {PersonUpdateComponent} from "./components/person/person-update/person-update.component";
import {RecordInsertComponent} from "./components/record/record-insert/record-insert.component";
import {RecordFaultsFilterComponent} from "./components/record/record-faults-filter/record-faults-filter.component";

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
  },
  {
    path:"persons/update/:id",
    component:PersonUpdateComponent
  },
  {
    path:"record",
    component:RecordInsertComponent
  },
  {
    path:"record/faults",
    component:RecordFaultsFilterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
