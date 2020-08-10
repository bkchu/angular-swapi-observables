import { Injectable } from '@angular/core';
import axios from 'axios';
import { Person } from '../models/Person';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(
    private http: HttpClient
  ) {}

  // returns results array
  getPeople(): Observable<Person[]> {
    return this.http.get<PeopleResponse>('https://swapi.dev/api/people').pipe(
      map(response => response.results)
    );
  }
}

interface PeopleResponse {
  results: Person[];
}
