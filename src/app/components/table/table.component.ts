import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Pokemon } from '../../models/pokemon.models';
import { PokemonService } from 'src/app/services/pokemon.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { ModalService } from 'src/app/services/modal.service';
import { EditPokemonService } from 'src/app/services/edit-pokemon.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit{

  @ViewChild('snackbar') snackbar!: SnackbarComponent;

  infoModal!:any;
  id!:string;

  message: string = '¡Este es mi mensaje informativo!';

  pokemons!: Pokemon[];

  constructor(private pokemonService:PokemonService, private modalService: ModalService, private cd:ChangeDetectorRef, private editPokemonService:EditPokemonService){}


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

  recive($even:any){
    this.closeModal()
    this.cd.detectChanges()
  }

 showSnackbar() {
    this.snackbar.show();
  }

  openModal(pokemon: any) {
    this.editPokemonService.emitEditPokemon(pokemon)
    this.id = pokemon.id;
    this.infoModal = pokemon;
    this.modalService.openModal({
      title: 'Editar Pokemon',
      data: pokemon
    });
    console.log(pokemon)
  }

  closeModal() {
    this.modalService.closeModal();
  }

}
