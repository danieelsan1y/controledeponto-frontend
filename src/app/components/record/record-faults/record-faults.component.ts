import { Component, OnInit } from '@angular/core';
import {Person} from "../../person/person-model/person.model";
import {RecordFault} from "../record-model/recordFault.model";
import {RecordService} from "../record-service/record.service";
import {Record} from "../record-model/record.model";
import {RecordParameter} from "../record-model/recordParameter.model";

@Component({
  selector: 'app-record-faults',
  templateUrl: './record-faults.component.html',
  styleUrls: ['./record-faults.component.css']
})
export class RecordFaultsComponent implements OnInit {

  recordFault : RecordFault[] = [];
  displayedColumns = ['Dia da Semana','Data']

  recordParameter: RecordParameter = {
    fristPeriod: undefined,
    secondPeriod: undefined,
    id: ''
  }

  constructor(private recordService : RecordService) { }

  ngOnInit(): void {
  }

  list () : void {
    this.recordService.list(this.recordParameter).subscribe((record: RecordFault[])=> {
      this.recordFault = record;
    })
  }

}
