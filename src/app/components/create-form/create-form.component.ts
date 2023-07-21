import { ChangeDetectorRef, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from 'src/app/models/pokemon.models';
import { PokemonService } from 'src/app/services/pokemon.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent {

  @ViewChild('snackbar') snackbar!: SnackbarComponent;

  message: string = '¡Este es mi mensaje informativo!';

  @Output() create:EventEmitter<Boolean> = new EventEmitter();

  pokemon!:Pokemon;
  createForm!:FormGroup;

  constructor(private fb:FormBuilder, private pokemonService:PokemonService, private cd:ChangeDetectorRef){
    this.createForm = this.fb.group({
      id: '',
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      imagen: ['', [Validators.required, Validators.pattern('^(https?:\\/\\/)?[\\w\\-]+(\\.[\\w\\-]+)+([/?#]\\S*)?$')]],
      ataque: [ 0, [Validators.required, Validators.min(0), Validators.max(100)]],
      defensa: [ 0, [Validators.required, Validators.min(0), Validators.max(100)]],
    })
  }

  createPokemon(){
    this.pokemon = this.createForm.value as Pokemon;
    console.log(this.pokemon)
    this.pokemonService.createPokemon(this.pokemon).subscribe( res=>console.log(res));
    this.message = 'Pokemon creado con exito'
    this.showSnackbar();
    this.toggle();
    this.cd.detectChanges();
  }

  toggle(){
    this.create.emit(false);
  }

  getValid(control:string){
    return this.createForm.controls[control].valid && this.createForm.controls[control].touched
  }

  getInvalid(control:string){
    return this.createForm.controls[control].invalid && this.createForm.controls[control].touched
  }

  getDisabled(){
    return this.createForm.invalid
  }

  showSnackbar() {
    this.snackbar.show();
  }
}
