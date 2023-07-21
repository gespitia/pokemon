import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pokemon } from '../models/pokemon.models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  filterNombre$:BehaviorSubject<string> = new BehaviorSubject("");

  urlBase= 'http://localhost:3000/pokemons';

  constructor(private httpClient: HttpClient) { }

  //Obtener pokemons
  getPokemon(){
    const params = new HttpParams()
      .set('nombre_like', this.filterNombre$.value)
    return this.httpClient.get(this.urlBase, {params})
  }

  createPokemon(body: Pokemon){
    return this.httpClient.post(this.urlBase, body)
  }

  deletePokemon(id:string){
    return this.httpClient.delete(this.urlBase + '/' + id);
  }

  getPokemonById(id:string){
    return this.httpClient.get(this.urlBase + '/' + id);
  }

  updatePokemonById(id:string, body:Pokemon){
    return this.httpClient.put(this.urlBase + '/' + id, body);
  }

  setFilterName(nombre:string){
    this.filterNombre$.next(nombre);
  }

}
