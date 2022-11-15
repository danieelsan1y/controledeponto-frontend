import { Component, OnInit } from '@angular/core';
import {Person} from "../../person/person-model/person.model";
import {Record} from "../record-model/record.model";
import {RecordService} from "../record-service/record.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-record-insert',
  templateUrl: './record-insert.component.html',
  styleUrls: ['./record-insert.component.css']
})
export class RecordInsertComponent implements OnInit {
  recordInsert: Record = {
    login: '',
    password: '',
    numeroRegistro: ''
  }

  constructor(private recordService : RecordService, private router: Router) { }

  ngOnInit(): void {
  }


  create () : void {
     this.recordService.create(this.recordInsert).subscribe((recordInsert:Record) => {
       this.recordInsert = recordInsert;
      this.recordService.showMessage("Sucesso, " +
        "numero do registro : " + this.recordInsert.numeroRegistro,false,10000);
      this.router.navigate([''])
    });
  }

  cancel() : void {
    this.router.navigate([''])
  }


}
