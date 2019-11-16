import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

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
    // Loop for pokecount times
    for (let i = 0; i < this.pokecount; i++) {
      // Get data from Api
      this.http.getPokemon().subscribe(data => {
        // Push pokemon name from PokeApi db to pokelist array
        this.pokelist.push(data.name);
      });
    }
    console.log(this.pokelist);
  }

  // Fix this method
  getPokeList() {
    // Clear pokelist
    this.pokelist = [];
    // console.log(this.pokecount);
    // Loop for pokecount times
    for (let i = 0; i < this.pokecount; i++) {
      console.log(this.pokecount);
      // Get data from Api
      this.http.getPokemon().subscribe(data => {
        // Push pokemon name from PokeApi db to pokelist array
        this.pokelist.push(data.name);
      });
    }
    console.log(this.pokelist);
  }
}
