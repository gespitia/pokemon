import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.models';
import { PokemonService } from 'src/app/services/pokemon.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit{
  pokemons!: Pokemon[];

  constructor(private pokemonService:PokemonService){}


  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe((res)=>{
      this.pokemons = res as Pokemon[];
    })
  }


}
