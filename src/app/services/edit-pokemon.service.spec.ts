import { TestBed } from '@angular/core/testing';

import { EditPokemonService } from './edit-pokemon.service';

describe('EditPokemonService', () => {
  let service: EditPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
