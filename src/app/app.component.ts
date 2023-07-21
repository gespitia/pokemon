import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { CreateFormComponent } from './components/create-form/create-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  visible = false;
  title = 'pokemon'

  @ViewChild('createForm') createForm!:CreateFormComponent;

  constructor(private cd:ChangeDetectorRef){}

  recive($even:any){
    console.log($even)
    this.visible=$even;
    this.cd.detectChanges()
  }

}
