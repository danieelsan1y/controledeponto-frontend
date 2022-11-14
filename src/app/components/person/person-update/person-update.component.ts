import {Component, OnInit} from '@angular/core';
import {PersonService} from "../person.service/person.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Person} from "../person.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-person-update',
  templateUrl: './person-update.component.html',
  styleUrls: ['./person-update.component.css']
})
export class PersonUpdateComponent implements OnInit {

  person!: Person

  constructor(private personService: PersonService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id)
      this.personService.findById(id).subscribe(person => {
        this.person = person
      });
  }

  update(): void {
    console.log(this.person)

    if (this.person.password == null) {
      this.person.password = ''
    }
    this.personService.update(this.person).subscribe(() => {
      this.personService.showMessage('Pessoa atualizada com sucesso! ')
      this.router.navigate(['/persons'])
    })

  }

  cancel(): void {
    this.router.navigate(['/persons'])
  }

}
