import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private showModalSource = new Subject<any>();
  public showModal$ = this.showModalSource.asObservable();

  constructor() {}

  openModal(data: any) {
    this.showModalSource.next(data);
  }

  closeModal() {
    this.showModalSource.next(null);
  }
}
