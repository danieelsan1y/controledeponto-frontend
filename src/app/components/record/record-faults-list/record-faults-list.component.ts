import {Component, Input, OnInit} from '@angular/core';
import {RecordFault} from "../record-model/recordFault.model";

@Component({
  selector: 'app-faults-list',
  templateUrl: './record-faults-list.component.html',
  styleUrls: ['./record-faults-list.component.css']
})
export class RecordFaultsListComponent implements OnInit {

  @Input() faults : RecordFault[] = [];
  displayedColumns = ['semana','dia']

  constructor() { }

  ngOnInit(): void {

  }

}
