import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { ModalComponent } from '../modal/modal.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreateFormComponent } from '../create-form/create-form.component';
import { SnackbarComponent } from '../snackbar/snackbar.component'; // Importa el componente SnackbarComponent
import { InputComponent } from '../input/input.component';
import { BtnComponent } from '../btn/btn.component';
import { SliderComponent } from '../slider/slider.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent, ModalComponent, CreateFormComponent, SnackbarComponent, InputComponent, BtnComponent, SliderComponent], // Agrega SnackbarComponent aquí
      imports: [HttpClientTestingModule, ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call listar Pokemon', () => {
    spyOn(component, 'listarPokemon');
    component.ngOnInit();
    expect(component.listarPokemon).toHaveBeenCalled();
  });
});
