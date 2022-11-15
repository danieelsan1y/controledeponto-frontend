import { Injectable } from '@angular/core';
import {catchError, EMPTY, map, Observable} from "rxjs";
import {Record} from "../record-model/record.model";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

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
}
