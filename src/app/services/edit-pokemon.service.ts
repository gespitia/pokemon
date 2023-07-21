import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditPokemonService {

  private disparadorEditPokemonSource = new Subject<any>();
  disparadorEditPokemon$ = this.disparadorEditPokemonSource.asObservable();

  constructor() { }

  emitEditPokemon(data: any) {
    this.disparadorEditPokemonSource.next(data);
  }
}
