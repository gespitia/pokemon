import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  title!: string;
  isOpen: boolean = false;
  data: any;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.modalService.showModal$.subscribe(data => {
      if (data) {
        this.isOpen = true;
        this.title = data.title;
        this.data = data.data;
      } else {
        this.isOpen = false;
        this.title = '';
        this.data = null;
      }
    });
  }

  closeModal() {
    this.modalService.closeModal();
  }
}
