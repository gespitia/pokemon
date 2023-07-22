// test.component.spec.ts
import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ControlValueAccessorDirective } from './control-value-accessor.directive';
import { TestComponent } from '../testing/components/test.component';

describe('ControlValueAccessorDirective', () => {
  let directive: ControlValueAccessorDirective<any>;
  let fixture: ComponentFixture<TestComponent>;
  let testFormControl: FormControl; // Declare the test FormControl

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, ControlValueAccessorDirective],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    testFormControl = new FormControl(); // Initialize the test FormControl
    fixture.componentInstance.control = testFormControl; // Assign the FormControl to the component property
    fixture.detectChanges();
    const div = fixture.nativeElement.querySelector('div');
    directive = div.injector.get(ControlValueAccessorDirective); // Utilizamos el método injector.get para obtener la instancia de la directiva
  });

  it('should create the directive', () => {
    expect(directive).toBeTruthy();
  });

  it('should write value to FormControl', () => {
    const value = 42;
    directive.writeValue(value);
    expect(testFormControl.value).toBe(value); // Use testFormControl.value to check the value of the FormControl
  });

  // Escribe más pruebas para otros métodos de la directiva según tus necesidades
});
