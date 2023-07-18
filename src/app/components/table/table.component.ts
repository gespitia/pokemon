import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
pokemons = [
    {
      nombre: 'Pikachu',
      imagen: 'https://pokefanaticos.com/galeria/pokemon/kanto/Pikachu.jpg',
      ataque: 55,
      defensa: 40
    },
    {
      nombre: 'Charizard',
      imagen: 'https://pokefanaticos.com/galeria/pokemon/kanto/Charizard.jpg',
      ataque: 84,
      defensa: 78
    },
    {
      nombre: 'Bulbasaur',
      imagen: 'https://pokefanaticos.com/galeria/pokemon/kanto/Bulbasaur.jpg',
      ataque: 49,
      defensa: 49
    },
    {
      nombre: 'Squirtle',
      imagen: 'https://pokefanaticos.com/galeria/pokemon/kanto/Squirtle.jpg',
      ataque: 48,
      defensa: 65
    },
    // Puedes agregar más objetos de pokémons aquí
  ];
}
