import {Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import {DialogModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';

@Component({
  moduleId: module.id,
  selector: 'app-message',
  templateUrl: 'message.component.html',
  styleUrls: ['message.component.css']
})
export class MessageComponent implements OnChanges {
  @Input()
  infoMsgValue: string;
  @Input()
  headerTxt: string;
  @Input()
  display: boolean = false;

  @Output() onCloseDialog: EventEmitter<boolean> = new EventEmitter();

  ngOnChanges() {
  }

  // showDialog() {
  //   this.display = true;
  // }
  //
  closeDialog() {
    this.onCloseDialog.emit(false);
  }

}
