import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Pokemon } from '../../models/pokemon.models';
import { PokemonService } from 'src/app/services/pokemon.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit{

  @ViewChild('snackbar') snackbar!: SnackbarComponent;

  message: string = '¡Este es mi mensaje informativo!';

  pokemons!: Pokemon[];

  constructor(private pokemonService:PokemonService, private cd:ChangeDetectorRef){}


  ngOnInit(): void {
    this.listarPokemon()
  }

  listarPokemon(){
    this.pokemonService.getPokemon().subscribe((res)=>{
      this.pokemons = res as Pokemon[];
    })
  }


  deletePokemon(id:string){
    this.pokemonService.deletePokemon(id).subscribe((res)=>console.log(res))
    this.pokemons=this.pokemons.filter((el)=>el.id !== id)
    this.message = 'Pokemon eliminado con exito'
    this.showSnackbar();
    this.cd.detectChanges();
  }


  showSnackbar() {
    this.snackbar.show();
  }
}
