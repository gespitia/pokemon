// app.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';
import { TestComponent } from './testing/components/test.component';
import { InputComponent } from './components/input/input.component';
import { BtnComponent } from './components/btn/btn.component';
import { ControlValueAccessorDirective } from './directives/control-value-accessor.directive';
import { SliderComponent } from './components/slider/slider.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { ModalComponent } from './components/modal/modal.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        AppComponent,
        InputComponent,
        BtnComponent,
        TableComponent,
        SearchFormComponent,
        CreateFormComponent,
        ControlValueAccessorDirective,
        SliderComponent,
        SnackbarComponent,
        ModalComponent
      ],
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule] // Agrega aquí otros módulos que puedan ser necesarios
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle visibility of createForm', () => {
    expect(component.visible).toBe(false);
    component.recive(true);
    fixture.detectChanges();
    expect(component.visible).toBe(true);
    component.recive(false);
    fixture.detectChanges();
    expect(component.visible).toBe(false);
  });
});
