import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { RemarkAnswerAddViewModel, RpmRemarkService } from '../../../../../../services/rpm/rpm-remark.service';
import { AuthService } from '../../../../../../services/common/auth.service';
import { ToasterComponent } from '../../../../../../components/toaster/toaster.component';
import { AdUserInfo } from '../../../../../../services/models/AdUserInfo';
import { CalendarSettings } from '../../../../../../CalendarSettings';
import { Calendar } from '../../../../../ppo/checklistfdetail/checklistfdetail.component';
import { Nsi } from '../../../../../../services/models/models';

@Component({
  selector: 'app-rpm-remark-buttons',
  templateUrl: './rpm-remark-buttons.component.html',
  styleUrls: ['./rpm-remark-buttons.component.css']
})
export class RpmRemarkButtonsComponent implements OnInit {
  @Input() item: any;
  @Output() refresh = new EventEmitter();
  @Input() answerListId: string;
  @Input() withLabels: boolean = false;
  @Input() breakdownList: any[];
  action: string;
  calendar: Calendar;
  date1: Date;
  date2: Date;
  displayCheck: boolean = false;
  //breakdownList: any[];
  isEditVisable: boolean = false;
  nameBreakdown: string;
  breakdownModel: Nsi = new Nsi();
  answer: RemarkAnswerAddViewModel = new RemarkAnswerAddViewModel();
  constructor(public auth: AuthService,
    private service: RpmRemarkService, private toaster: ToasterComponent) { }

  ngOnInit() {
    this.initCalendar();
    this.getBreakdown();
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

  onSelectedUser(user: AdUserInfo, positionId: number) {
    this.answer.receiverUserAccount = user.accountName;
  }
  check(action: string) {
    this.displayCheck = true;
    this.action = action;
    this.resetModal();
  }

  hideCheckDialog() {
    this.displayCheck = false;
  }

  resetModal() {
  }

  save() {
    this.answer.answerListId = this.answerListId;
    this.answer.itemId = this.item.id;
    this.hideCheckDialog();
    if ((this.action === 'accept') || (this.action === 'review')) {
      this.answer.dateStart = new Date(this.date1);
      this.answer.dateFinish = new Date(this.date2);
    }
    if (this.action === 'review') {
      this.answer.isReview = true;
    }
    this.answer.statusId = this.statusByAction();
    if (this.answer.photos == undefined && this.action === 'corrected') {
      this.toaster.popToast('error', 'Внимание!', 'Вы не выбрали фото!!!');
      this.answer = new RemarkAnswerAddViewModel();
      return;
    }

    if (this.answer.photos == undefined && this.action === 'done') {
      this.toaster.popToast('error', 'Внимание!', 'Вы не выбрали фото!!!');
      this.answer = new RemarkAnswerAddViewModel();
      return;
    }

    if (this.action === 'rework') {
      if (this.answer.comment === undefined) {
        this.toaster.popToast('error', 'Внимание!', 'Вы не заполнили поле комментарий');
        this.answer = new RemarkAnswerAddViewModel();
        return;
      }
    }
    this.service.addAnswer(this.answer).subscribe(
      x => {
        this.refresh.emit();
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
    this.answer = new RemarkAnswerAddViewModel();
  }

  getBreakdown() {
    this.service.getBreakdown().subscribe(
      data => {
        if (data.success) {
          this.breakdownList = data.result;
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }

  withdrawRemark(itemId: string) {
    this.service.withdrawRemark(itemId).subscribe(
      i => {
        if (i.success) {
          this.refresh.emit();
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }

  saveBreakdown() {
    this.service.addBreakdown(this.breakdownModel).subscribe(
      data => {
        if (data.success) {
          this.getBreakdown();
          this.showEditVisable(false);
          this.toaster.popToast('success', 'Внимание!', 'Данные успешно добавлены');
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      });
  }

  statusByAction(): number {
    if (this.action === 'done')
      return 2;
    else if (this.action === 'corrected')
      return 3;
    else if (this.action === 'rework')
      return 4;
    else if (this.action === 'cancel')
      return 5;
    else if (this.action === 'accept')
      return 6;
    else if (this.action === 'redirect')
      return 7;
    else if (this.action == 'acceptDev')
      return 8;
    else if (this.action === 'doneDev')
      return 9;
    else if (this.action === 'cancelDev')
      return 10;
    else if (this.action === 'review')
      return 6;

  }

  showEditVisable(vis: boolean) {
    this.isEditVisable = vis;
  }

}
