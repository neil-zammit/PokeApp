import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // counter class property
  counter = 0;

  constructor(private http: HttpClient) {}

  getPokemonName() {
    this.counter++;
    // Return pokemon at index counter
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.counter}`);
  }
}
