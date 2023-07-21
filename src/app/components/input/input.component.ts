import { Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputComonent{
  @Input() valid!:Boolean;
  @Input() invalid!:Boolean;
}
