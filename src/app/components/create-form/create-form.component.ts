import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from 'src/app/models/pokemon.models';
import { PokemonService } from 'src/app/services/pokemon.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { EditPokemonService } from 'src/app/services/edit-pokemon.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit{

  @Input() title='Nuevo Pokemon'
  @Input() id=''

  @ViewChild('snackbar') snackbar!: SnackbarComponent;

  message: string = '¡Este es mi mensaje informativo!';

  @Output() create:EventEmitter<Boolean> = new EventEmitter();

  pokemon:Pokemon = {
    id: '',
    nombre: '',
    imagen: '',
    ataque: 0,
    defensa: 0
  };
  createForm!:FormGroup;

  constructor(private fb:FormBuilder, private pokemonService:PokemonService, private cd:ChangeDetectorRef, private editPokemonService:EditPokemonService){
    this.createForm = this.fb.group({
      id: [''],
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      imagen: ['', [Validators.required, Validators.pattern('^(https?:\\/\\/)?[\\w\\-]+(\\.[\\w\\-]+)+([/?#]\\S*)?$')]],
      ataque: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      defensa: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
    })
    console.log(this.pokemon)
    console.log(this.createForm)
  }

  ngOnInit(): void {
      this.editPokemonService.disparadorEditPokemon$.subscribe(data => {
        this.createForm.patchValue(data)
        this.id = data.id
      })
  }

  createPokemon(){
    this.pokemon = this.createForm.value as Pokemon;
    console.log(this.pokemon)
    if(!this.id){
      this.pokemonService.createPokemon(this.pokemon).subscribe( res=>console.log(res));
      this.message = 'Pokemon creado con exito'
    }else{
      this.pokemonService.updatePokemonById(this.id, this.pokemon).subscribe(res=>console.log(res))
      this.message = 'Pokemon acuatilizado de forma exitosa'
    }
    this.showSnackbar();
    setTimeout(()=>{
      this.toggle();
    }, 4000)
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
