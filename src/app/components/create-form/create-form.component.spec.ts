import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateFormComponent } from './create-form.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChangeDetectorRef} from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ModalService } from 'src/app/services/modal.service';
import { InputComponent } from '../input/input.component';
import { BtnComponent } from '../btn/btn.component'; // Import the app-btn component
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { SliderComponent } from '../slider/slider.component';

describe('CreateFormComponent', () => {
  let component: CreateFormComponent;
  let fixture: ComponentFixture<CreateFormComponent>;
  let formBuilder: FormBuilder;
  let modalService: ModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CreateFormComponent,
        InputComponent,
        BtnComponent,
        SnackbarComponent,
        SliderComponent // Declare the app-btn component here
      ],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      providers: [FormBuilder, ChangeDetectorRef],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateFormComponent);
    component = fixture.componentInstance;

    formBuilder = TestBed.inject(FormBuilder);
    fixture.detectChanges();
  });

  it('should create the form', () => {
    fixture.detectChanges();
    expect(component.createForm).toBeDefined();
    expect(component.createForm instanceof FormGroup).toBe(true);
  });

  it('should have required validators for name and email fields', () => {
    // Usamos el formBuilder.group() para crear un formulario con los mismos campos y validaciones
    const expectedForm = formBuilder.group({
      id: [''],
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      imagen: ['', [Validators.required, Validators.pattern('^(https?:\\/\\/)?[\\w\\-]+(\\.[\\w\\-]+)+([/?#]\\S*)?$')]],
      ataque: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      defensa: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
    });

    fixture.detectChanges();
    expect(component.createForm.value).toEqual(expectedForm.value);
  });
});

