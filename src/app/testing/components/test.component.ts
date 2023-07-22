import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  template: `
    <!-- test.component.html -->
<div [formControl]="control" ControlValueAccessorDirective name="'control'">
<!-- Add the rest of your component template here -->
</div>
  `,
})
export class TestComponent {
  control = new FormControl();
}
