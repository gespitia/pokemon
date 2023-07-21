import { Directive, Inject,
  Injector,
  Input,
  OnInit,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  NgControl,
  Validators,
} from '@angular/forms';
import { Subject, distinctUntilChanged, startWith, takeUntil, tap } from 'rxjs';

@Directive({
  selector: '[appControlValueAccessor]',
})
export class ControlValueAccessorDirective<T> implements ControlValueAccessor, OnInit {

  private _isDisabled = false;
  private onTouched!: () => T;
  private _destroy$ = new Subject<void>();

  control!: FormControl | undefined;
  isRequired = true;

  constructor(@Inject(Injector) private injector: Injector) {}

  ngOnInit(): void {
    this.setFormControl();
    this.isRequired = this.control?.hasValidator(Validators.required) ?? false;
  }

  setFormControl() {
    try {
      const formControl = this.injector.get(NgControl);
      switch (formControl.constructor) {
        case FormControlName:
          this.control = this.injector
            .get(FormGroupDirective)
            .getControl(formControl as FormControlName);
          break;
        default:
          this.control = (formControl as FormControlDirective)
            .form as FormControl;
      }
    } catch (error) {
      this.control = new FormControl();
    }
  }

  @Input() field = '';

  writeValue(value: T): void {
    if (this.control && this.control.value !== value) {
      this.control.setValue(value);
    }
  }

  registerOnChange(fn: (val: T | null)=>T): void {
    this.control?.valueChanges.pipe(
      takeUntil(this._destroy$),
      startWith(this.control.value),
      distinctUntilChanged(),
      tap( val => fn(val))).subscribe(()=>this.control?.markAsUntouched())
  }
  registerOnTouched(fn: ()=> T): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this._isDisabled = isDisabled;
  }
}
