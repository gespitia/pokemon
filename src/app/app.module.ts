import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputComonent } from './components/input/input.component';
import { BtnComponent } from './components/btn/btn.component';
import { TableComponent } from './components/table/table.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ControlValueAccessorDirective } from './directives/control-value-accessor.directive';
import { SliderCompnent } from './components/slider/slider.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
@NgModule({
  declarations: [
    AppComponent,
    InputComonent,
    BtnComponent,
    TableComponent,
    SearchFormComponent,
    CreateFormComponent,
    ControlValueAccessorDirective,
    SliderCompnent,
    SnackbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
