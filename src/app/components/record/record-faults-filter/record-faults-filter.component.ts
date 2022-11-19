import {Component, Input, OnInit} from '@angular/core';
import {RecordFault} from "../record-model/recordFault.model";
import {RecordService} from "../record-service/record.service";
import {RecordParameter} from "../record-model/recordParameter.model";

@Component({
  selector: 'app-record-faults',
  templateUrl: './record-faults-filter.component.html',
  styleUrls: ['./record-faults-filter.component.css']
})
export class RecordFaultsFilterComponent implements OnInit {

  faults : RecordFault[] = [];

  recordParameter: RecordParameter = {
    fristPeriod: undefined,
    secondPeriod: undefined,
    login: ''
  }

  constructor(private recordService : RecordService) { }

  ngOnInit(): void {
  }

  list () : void {
    this.recordService.list(this.recordParameter).subscribe((record: RecordFault[])=> {
      this.faults = record;
      console.log(this.faults)
    })
  }
}
