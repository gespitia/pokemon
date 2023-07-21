import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {
  @Input() message!: string;

  public visible: boolean = false;

  show() {
    this.visible = true;
    setTimeout(() => this.hide(), 3000); // Duración en milisegundos (3 segundos en este caso)
  }

  hide() {
    this.visible = false;
  }
}
