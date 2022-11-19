import { Component, OnInit } from '@angular/core';
import {PersonService} from "../person-service/person.service";
import {Person} from "../person-model/person.model";
import {MatDialog} from "@angular/material/dialog";
import {ListDialogComponent} from "../../views/list-dialog/list-dialog.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  constructor(private personService: PersonService, public dialog: MatDialog, private router : Router) { }
  @Component ({
    selector : 'dialog-animations-example' ,
    styleUrls : [ 'dialog-animations-example.css' ],
    templateUrl : 'dialog-animations-example.html' ,
  })


  persons : Person[] = [];
  displayedColumns = ['id','login','nome','sobrenome','acesso','status', 'acao']

  ngOnInit(): void {
    this.personService.list().subscribe((persons: Person[])=> {
      this.persons = persons;
    })
  }


  disable (id:String) : void {
   // this.openDialog("0","0", "Deseja desativar o usuário?");
    this.personService.disable(id).subscribe(()=>{
      this.personService.showMessage('Pessoa desabilitada com sucesso! ')
      this.ngOnInit()
    })
  }

  enable (id:String) : void {
    // this.openDialog("0","0", "Deseja desativar o usuário?");
    this.personService.enable(id).subscribe(()=>{
      this.personService.showMessage('Pessoa habilitada com sucesso! ')
      this.ngOnInit();
    })
  }

  load() {
    (sessionStorage['refresh'] == 'true' || !sessionStorage['refresh'])
    && location.reload();
    sessionStorage['refresh'] = false;
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, msg : String): void {
    this.dialog.open(ListDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data : {
        message : msg
      }
    });

  }

  navigate(): void {
    this.router.navigate(['/'])
    this.router.navigate(['/persons'])
  }

}
