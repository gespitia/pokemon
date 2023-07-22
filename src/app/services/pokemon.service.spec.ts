import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService]
    });
    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call httpClient.get() with the correct URL and parameters', () => {
    const filterNombre = 'pikachu';
    service.setFilterName(filterNombre);
    const expectedUrl = 'http://localhost:3000/pokemons';

    service.getPokemon().subscribe();

    const req = httpMock.expectOne((request) => {
      return request.url === expectedUrl && request.params.has('nombre_like') && request.params.get('nombre_like') === filterNombre;
    });
    expect(req.request.method).toBe('GET');
    httpMock.verify();
  });

  it('should call httpClient.post() with the correct URL and body', () => {
    const pokemon: any = { name: 'Pikachu' };
    const expectedUrl = 'http://localhost:3000/pokemons';

    service.createPokemon(pokemon).subscribe();

    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toBe(pokemon);
    httpMock.verify();
  });

  it('should call httpClient.delete() with the correct URL', () => {
    const pokemonId = '123';
    const expectedUrl = `http://localhost:3000/pokemons/${pokemonId}`;

    service.deletePokemon(pokemonId).subscribe();

    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('DELETE');
    httpMock.verify();
  });

});
