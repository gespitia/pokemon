import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { CreateFormComponent } from './components/create-form/create-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
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
