import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Remarks, Corrected, OkkAnswerService } from '../../../../../services/okk/okk-answer.service';
import { AuthService } from '../../../../../services/common/auth.service';
import { ToasterComponent } from '../../../../../components/toaster/toaster.component';
declare var jQuery: any;
@Component({
  selector: 'app-remarks-list',
  templateUrl: './remarks-list.component.html',
  styleUrls: ['./remarks-list.component.css']
})
export class RemarksListComponent implements OnInit {

  @Input() remark: Remarks;
  @Input() isPauseRoom: boolean;
  @Output() checkAnswer = new EventEmitter();
  corrected: Corrected = new Corrected();

  constructor(public auth: AuthService,
    private service: OkkAnswerService,
    private toaster: ToasterComponent) { }

  ngOnInit() {
    //console.log(this.remark);
  }

  close() {
    jQuery('#myModal2').modal('hide');
  }

  infoRemark(answerItemId: string) {
    localStorage.setItem('answerItemId', answerItemId);
  }

  saveRemarks(num: number) {
    this.corrected.answerTypeId = num;
    this.corrected.id = localStorage.getItem('answerItemId');
    this.service.setChecked(this.corrected).subscribe(data => {

      this.toaster.popToast('success', 'Внимание!', 'Изменение успешно прошло');
      jQuery("#myModal2").modal('hide');
      this.getAnswerItem(data);
      this.corrected = new Corrected();
    });
  }
  noCorrected(answerItemId: string) {
    localStorage.setItem('answerItemId', answerItemId);
    this.saveRemarks(6);
  }


  getAnswerItem(answerItemId: string) {
    this.service.getAnswerItem(answerItemId).subscribe(i => {
      this.remark.answerId = i.answerId;
      this.remark.comment = i.comment;
      this.remark.dateUpdated = i.dateUpdated;
      this.remark.images = i.images;
      this.remark.answerType = i.answerType;
      this.remark.id = i.id;
      this.checkAnswer.emit();
    });
  }
}
