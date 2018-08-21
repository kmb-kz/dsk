import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-qc-modal-okk-child',
  templateUrl: './qc-modal-okk-child.component.html',
  styleUrls: ['./qc-modal-okk-child.component.css']
})
export class QcModalOkkChildComponent implements OnInit {

  @Input() visible: boolean = false;
  @Input() header = 'Диалоговое окно';
  @Output() hide = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  _hide() {
    this.visible = false;
    this.hide.emit();
  }
}
