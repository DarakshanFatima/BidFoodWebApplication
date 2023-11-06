import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-root',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  persons: Person[] = [];
  newPerson: Person = new Person();
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
      throw new Error('Method not implemented.');
  }
  
  addPerson() {
    this.apiService.addPerson(this.newPerson).subscribe(
      (person) => {
        this.persons.push(person);
        this.newPerson = new Person();
      }
    );
    //console.log(this.persons);
  }
}
