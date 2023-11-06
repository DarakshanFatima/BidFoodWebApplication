import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from 'src/app/models/person';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost';
  constructor(private http: HttpClient) { }

  addPerson(personData: Person){
    return this.http.post<Person>('${this.apiUrl}/Person', personData);
  }

  //getPersons() {
  //  return this.http.get<Person[]>('${this.apiUrl}/Person');
  //}
}
