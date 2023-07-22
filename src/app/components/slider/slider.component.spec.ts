import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, NgControl } from '@angular/forms';
import { ControlValueAccessorDirective } from 'src/app/directives/control-value-accessor.directive';
import { TestComponent } from 'src/app/testing/components/test.component';

describe('ControlValueAccessorDirective', () => {
  let directive: ControlValueAccessorDirective<any>;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, ControlValueAccessorDirective],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('input'); // Encuentra el elemento input dentro del componente de prueba
    directive = input.injector.get(ControlValueAccessorDirective); // Utilizamos el método injector.get para obtener la instancia de la directiva
  });

  it('should create the directive', () => {
    expect(directive).toBeTruthy();
  });

  it('should write value to FormControl', () => {
    const value = 42;
    directive.writeValue(value);
    expect(directive.control?.value).toBe(value);
  });

  // Escribe más pruebas para otros métodos de la directiva según tus necesidades
});
