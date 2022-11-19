import { Injectable } from '@angular/core';
import {catchError, EMPTY, map, Observable} from "rxjs";
import {Record} from "../record-model/record.model";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Person} from "../../person/person-model/person.model";
import {RecordFault} from "../record-model/recordFault.model";
import {RecordParameter} from "../record-model/recordParameter.model";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  baseUrl = "http://localhost:8080/record";

  constructor(private http:HttpClient, private snackBar : MatSnackBar) { }

  create(recordInsert : Record): Observable<Record> {
    return this.http.post(this.baseUrl,recordInsert).pipe(
      map((obj) =>obj),
      catchError(e=> this.errorHandler(e))
    )
  }

  showMessage(msg: string, isError : boolean =false, tmp: any): void {
    this.snackBar.open(msg, 'X', {
      duration: tmp,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
  }

  errorHandler(e: any) : Observable<any> {
    this.showMessage(e.error.message, true, 5000)
    return EMPTY
  }

  list(recordParameter: RecordParameter): Observable<RecordFault[]> {
    const formData = new FormData();
    
    let datePipe: DatePipe = new DatePipe('pt-BR')
    let fristPeriod = datePipe.transform(recordParameter.fristPeriod, 'dd/MM/YYYY')
    let secondPeriod = datePipe.transform(recordParameter.secondPeriod, 'dd/MM/YYYY')

    const urlWithFilters = this.baseUrl + '/lacks?fristPeriod=' + fristPeriod
      + '&secondPeriod=' + secondPeriod + '&login=' + recordParameter.login;

    return this.http.get<RecordFault[]>(urlWithFilters);
  }
}
