import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PersonService} from "../person-service/person.service";
import {Person} from "../person-model/person.model";
import {catchError, map, Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit {

  constructor(private router: Router, private personService: PersonService) {
  }

  person: Person = {
    id: '',
    login: '',
    name: '',
    lastname: '',
    password: '',
    access: '',
    status: ''
  }


  ngOnInit(): void {
  }

  create(): void {
    this.person.status = 'ACTIVE';
    this.personService.create(this.person).subscribe(() => {
      this.personService.showMessage("Pessoa Criada!");
      this.router.navigate([''])
    });
  }

  cancel(): void {
    this.router.navigate(['']);
  }


}
