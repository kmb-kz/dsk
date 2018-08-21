import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Parameters, OkkAnswers } from '../../../../services/okk/okk-standard.service';
import { AuthService } from '../../../../services/common/auth.service';
import { OkkAnswerService, AreaStandard, AddAnswer } from '../../../../services/okk/okk-answer.service';
import { ToasterComponent } from '../../../../components/toaster/toaster.component';
import { CalendarSettings } from '../../../../CalendarSettings';
import { Calendar } from '../../../ppo/checklistfdetail/checklistfdetail.component';
import { Remarks } from '../../../../services/rpm/rpm-remark.service';
declare var jQuery: any;
@Component({
  selector: 'app-okk-part-check-reamrk-child',
  templateUrl: './okk-part-check-reamrk-child.component.html',
  styleUrls: ['./okk-part-check-reamrk-child.component.css']
})
export class OkkPartCheckReamrkChildComponent implements OnInit {

  @Input() parameter: Parameters = new Parameters();
  @Input() areaPartId: string;
  @Input() isFinishStagesStatus: boolean;
  @Output() check = new EventEmitter();
  @Input() isPauseRoom: boolean;
  @Input() stageId: string;

  areaId: string;
  parameterId: string;
  remarks: Remarks[] = [];
  areaStandardId: string;
  addAnswerModel: AddAnswer = new AddAnswer();
  calendar: Calendar;
  checkModel: AddAnswer = new AddAnswer();
  displayListRemark: boolean = false;
  constructor(public auth: AuthService, private service: OkkAnswerService, private toaster: ToasterComponent) { }
  displayModalHeader: string;
  ngOnInit() {
    this.areaId = localStorage.getItem('cns-last-area-id');
    this.initCalendar();
  }

  initCalendar() {
    let today = new Date();
    let nextMonth = (today.getMonth() === 11) ? 0 : today.getMonth() + 1;
    let nextYear = ((today.getMonth() === 11))
      ? today.getFullYear() + 1 : today.getFullYear();
    this.calendar = <Calendar>{};
    this.calendar.rus = CalendarSettings.ru;
    this.calendar.minDate = new Date();
    this.calendar.minDate.setMonth(today.getMonth());
    this.calendar.minDate.setFullYear(today.getFullYear());
    this.calendar.maxDate = new Date();
    this.calendar.maxDate.setMonth(nextMonth);
    this.calendar.maxDate.setFullYear(nextYear);
  }

  sendAnswer(parameterId: string, versionId: string, statusID: number, parameterInfo: OkkAnswers) {
    this.service.getAreaStandard(this.areaId, versionId).subscribe(i => {
      this.areaStandardId = i.id;
      this.addAnswerModel = new AddAnswer();
      this.addAnswerModel.areaStandardId = i.id;
      this.addAnswerModel.parameterId = parameterId;
      this.addAnswerModel.remarkStatusId = statusID;
      this.addAnswerModel.areaPartid = this.areaPartId;
      this.addAnswerModel.typeWork = 2;
      this.addAnswerModel.stageId = this.stageId;
      this.service.addAnswer(this.addAnswerModel).subscribe(data => {
        this.toaster.popToast('success', 'Внимание!', 'Изменение успешно прошло ');
        if (parameterInfo != null) {
          this.getAnswer(data, this.addAnswerModel);
        } else {
          this.check.emit();
        }
      });

    });
  }

  checkAnswer(statusId: number) {
    this.checkModel.areaStandardId = localStorage.getItem('last-areaStandardId');
    this.checkModel.parameterId = localStorage.getItem('last-parameterId');
    this.checkModel.areaPartid = this.areaPartId;
    this.checkModel.remarkStatusId = statusId;
    this.checkModel.answerTypeId = statusId;
    this.checkModel.stageId = this.stageId;
    this.checkModel.typeWork = 2;
    this.service.addAnswer(this.checkModel).subscribe(i => {
      this.toaster.popToast('success', 'Внимание!', 'Изменение успешно прошло ');
      jQuery("#modal-dialog").modal('hide');
      jQuery("#modal-dialog-pause").modal('hide');
      if (localStorage.getItem('parameterInfo') !== '0') {
        this.getAnswer(i, this.checkModel);
      } else {
        this.check.emit();
      }
      this.checkModel = new AddAnswer();
    });
  }


  getAnswer(answerId: string, modelInfo: AddAnswer) {
    this.service.getAnswer(answerId, modelInfo.remarkStatusId).subscribe(i => {
      this.parameter.parameterId = i.parameterId;
      this.parameter.answers.id = i.id;
      this.parameter.answers.standardStatus.id = i.statusId;
      this.parameter.answers.dateUpdated = i.dateChecked;
      this.parameter.answers.cntRemarkAnswers = i.cntRemarkAnswers;
    });
  }

  infoToCheck(areaStandardId: string, parameterId: string, versionId: string, parameterInfo: OkkAnswers) {
    localStorage.setItem('last-parameterId', parameterId);
    localStorage.setItem('last-areaStandardId', areaStandardId);
    localStorage.setItem('last-versionId', versionId);
    if (parameterInfo != null) {
      localStorage.setItem('parameterInfo', '1');
    } else {
      localStorage.setItem('parameterInfo', '0');
    }
  }


  getReamrks(parameterName: string, answerId: string) {
    this.displayModalHeader = 'Список замечании ' + parameterName;
    this.remarks = [];
    this.service.getRemarks(answerId).subscribe(i => {
      this.remarks = i;
    });
    this.displayListRemark = true;
  }

  stopPause(areaStandardId: string, parameterId: string, versionId: string, parameterInfo: OkkAnswers) {
    if (confirm('Вы действительно хотите снять приостановку с пункта?')) {
      //parameter?.parameterId, parameter?.versionId,1, parameter?.answers
      this.sendAnswer(parameterId, versionId, 1, parameterInfo);
    }
  }

  hideListRemarkDialog() {
    this.displayListRemark = false;
  }
  checkAnswers() {
    this.check.emit();
  }

}
