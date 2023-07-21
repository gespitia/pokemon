import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  @Output() create: EventEmitter<Boolean> = new EventEmitter();

  searchForm = this.fb.group({
    searchInputControl: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private pokemonService: PokemonService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.searchForm.controls.searchInputControl.valueChanges
      .pipe(
        debounceTime(300), // Esperar 300ms después de la última pulsación de tecla
        distinctUntilChanged(), // Ignorar cambios si el valor es el mismo que el anterior
      )
      .subscribe(value=>this.pokemonService.setFilterName(value as string));
  }

  toggle() {
    this.create.emit(true);
  }
}
