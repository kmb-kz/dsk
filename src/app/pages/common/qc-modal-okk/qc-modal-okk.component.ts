import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-qc-modal-okk',
  templateUrl: './qc-modal-okk.component.html',
  styleUrls: ['./qc-modal-okk.component.css']
})
export class QcModalOkkComponent implements OnInit {

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
