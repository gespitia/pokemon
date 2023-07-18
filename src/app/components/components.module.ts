import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComonent } from './input/input.component';
import { BtnComponent } from './btn/btn.component';
import { TableComponent } from './table/table.component';
import { SliderComponent } from './slider/slider.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { CreateFormComponent } from './create-form/create-form.component';

@NgModule({
  declarations: [
    InputComonent,
    BtnComponent,
    TableComponent,
    SliderComponent,
    SearchFormComponent,
    CreateFormComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    InputComonent,
    BtnComponent,
    TableComponent,
    SearchFormComponent,
    SliderComponent,
    CreateFormComponent,
  ]
})
export class ComponentsModule { }