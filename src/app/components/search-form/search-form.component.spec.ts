import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormComponent } from './search-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InputComponent } from '../input/input.component';
import { BtnComponent } from '../btn/btn.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchFormComponent, InputComponent, BtnComponent],
      imports:[HttpClientTestingModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
