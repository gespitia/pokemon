import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from 'src/app/models/pokemon.models';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent {

  @Output() create:EventEmitter<Boolean> = new EventEmitter();

  pokemon!:Pokemon;
  createForm!:FormGroup;

  constructor(private fb:FormBuilder, private pokemonService:PokemonService){
    this.createForm = this.fb.group({
      id: '',
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      imagen: ['', [Validators.required, Validators.pattern('https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$')]],
      ataque: [ 0, [Validators.required, Validators.min(0), Validators.max(100)]],
      defensa: [ 0, [Validators.required, Validators.min(0), Validators.max(100)]],
    })
  }

  createPokemon(){
    this.pokemon = this.createForm.value as Pokemon;
    console.log(this.pokemon)
    this.pokemonService.createPokemon(this.pokemon).subscribe( res=>console.log(res));
  }

  toggle(){
    this.create.emit(false);
  }
}
