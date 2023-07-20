import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon.models';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  urlBase= 'http://localhost:3000/pokemons';

  constructor(private httpClient: HttpClient) { }

  //Obtener pokemons
  getPokemon(){
    return this.httpClient.get(this.urlBase)
  }

  createPokemon(body: Pokemon){
    return this.httpClient.post(this.urlBase, body)
  }

}
