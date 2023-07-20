import { ChangeDetectorRef, Component } from '@angular/core';

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

  constructor(private cd:ChangeDetectorRef){}

  recive($even:any){
    console.log($even)
    this.visible=$even;
    this.cd.detectChanges()
  }

}
