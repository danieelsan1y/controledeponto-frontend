import {Component, Injectable, OnInit} from '@angular/core';
import {Person} from "../person.model";
import {catchError, EMPTY, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  baseUrl = "http://localhost:8080/person";

  constructor(private http:HttpClient, private snackBar : MatSnackBar) { }


  create(person: Person) : Observable<Person> {
    return this.http.post(this.baseUrl,person).pipe(
      map((obj) =>obj),
      catchError(e=> this.errorHandler(e))
    );
  }

  list() : Observable<Person[]> {
    return this.http.get<Person[]>(this.baseUrl);
  }

  // @ts-ignore
  disable (id : String) :Observable<Person> {
    const url = `${this.baseUrl+"/status/inactivate"}/${id}`
    return this.http.put<Person>(url,{}).pipe(
      map((obj)=>obj),
      catchError(e =>this.errorHandler(e))
    );
  }

  enable (id : String) :Observable<Person> {
    const url = `${this.baseUrl+"/status/activate"}/${id}`
    return this.http.put<Person>(url,{}).pipe(
      map((obj)=>obj),
      catchError(e =>this.errorHandler(e))
    );
  }

  showMessage(msg: string, isError : boolean =false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
  }

  errorHandler(e: any) : Observable<any> {
    this.showMessage(e.error.message, true)
    return EMPTY
  }
}
