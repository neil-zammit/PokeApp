import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // Implement form where user enters how much pokemon will be retrieved
  pokecount = 5;
  // class property to hold results
  pokelist = [];

  // inject service
  constructor(private http: HttpService) {}

  ngOnInit() {
    // Loop for pokecount times +1 since no pokemon at index 0 in API db
    for (let i = 1; i < this.pokecount + 1; i++) {
      this.http.getPokemon().subscribe(data => {
        // console.log(data.name);
        // Push pokemon name from PokeApi db to pokelist array
        this.pokelist.push(data.name);
      });
    }
    console.log(this.pokelist);
  }
}
