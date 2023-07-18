import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent {

  createForm = this.fb.group({
    nombre:['', [Validators.required, Validators.maxLength(50)]],
    imagen:['', [Validators.required, Validators.pattern('https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$')]],
    ataque:['', Validators.required, Validators.min(0), Validators.max(100)],
    defensa:['', Validators.required, Validators.min(0), Validators.max(100)],
  })

  constructor(private fb:FormBuilder){}
}
