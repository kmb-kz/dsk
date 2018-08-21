import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-qc-modal',
  templateUrl: './qc-modal.component.html',
  styleUrls: ['./qc-modal.component.css']
})
export class QcModalComponent implements OnInit {

  @Input() visible: boolean = false;
  @Input() header: string = "Диалоговое окно"; 
  @Output() hide = new EventEmitter();  
  constructor() { }

  ngOnInit() {
  }
  
  _hide() {
    this.visible=false;
    this.hide.emit();
  }
}
