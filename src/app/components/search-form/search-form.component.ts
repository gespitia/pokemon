import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {

  visible:Boolean=false;

  @Output() create: EventEmitter<any> = new EventEmitter();

  searchForm = this.fb.group({
    searchInputControl:['', Validators.required]
  })

  constructor(private fb: FormBuilder){}

  toggle() {
    this.visible = !this.visible;
    this.create.emit(this.visible);
  }
}
